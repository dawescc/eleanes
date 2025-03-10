#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { execa } from "execa";

async function main() {
	try {
		// Get project name from command line argument
		const projectName = process.argv[2];

		if (!projectName) {
			console.error("Please provide a project name!");
			console.log("Usage: make-biscuits <project-name>");
			process.exit(1);
		}

		const projectPath = path.resolve(process.cwd(), projectName);

		console.log(`📦 Creating a new Next.js app with Biscuits in ${projectName}...`);

		// Run create-next-app with all specified options
		const createNextAppArgs = [
			projectName,
			"--ts",
			"--tailwind",
			"--eslint",
			"--app",
			"--no-src-dir",
			"--turbopack",
			"--empty",
			"--use-pnpm",
			"--skip-install", // We'll install after we modify package.json
			"--yes",
			"--disable-git",
		];

		console.log(`🚀 Running create-next-app with options: ${createNextAppArgs.join(" ")}`);

		// Execute create-next-app and pipe its output to our process
		await execa("npx", ["create-next-app", ...createNextAppArgs], {
			stdio: "inherit", // Show output in real-time
		});

		console.log("✅ Base Next.js app created successfully!");

		// Get the path to our package directory (where this script is running from)
		const packageDir = path.dirname(path.dirname(__dirname));

		// Copy all template files
		const templateDir = path.join(packageDir, "src/default");

		console.log("📂 Copying Biscuits template files...");
		await fs.copy(templateDir, projectPath, { overwrite: true });

		// Add our package and peer dependencies to package.json
		console.log("📝 Updating package.json with dependencies...");
		const pkgJsonPath = path.join(projectPath, "package.json");
		const pkgJson = await fs.readJson(pkgJsonPath);

		// Get the list of peer dependencies from our own package.json
		const ourPackageJsonPath = path.join(packageDir, "package.json");
		const ourPackageJson = await fs.readJson(ourPackageJsonPath);

		// Add @eleanes/biscuits as a dependency
		pkgJson.dependencies = {
			...pkgJson.dependencies,
			"@eleanes/biscuits": "latest",
		};

		// Add our peer dependencies to the target project
		pkgJson.dependencies = {
			...pkgJson.dependencies,
			...ourPackageJson.peerDependencies,
		};

		// Write updated package.json
		await fs.writeJson(pkgJsonPath, pkgJson, { spaces: 2 });

		// Copy LICENSE and README.md
		const licenseSource = path.join(packageDir, "LICENSE");
		const readmeSource = path.join(packageDir, "README.md");

		await fs.copy(licenseSource, path.join(projectPath, "LICENSE"), { overwrite: true });
		await fs.copy(readmeSource, path.join(projectPath, "README.md"), { overwrite: true });

		// Install dependencies using pnpm
		console.log("📦 Installing dependencies with pnpm...");
		await execa("pnpm", ["install"], {
			cwd: projectPath,
			stdio: "inherit",
		});

		console.log("🎉 Successfully created a new Next.js app with Biscuits!");
		console.log(`📁 Your project is ready at: ${projectPath}`);
		console.log("🚀 To get started:");
		console.log(`  cd ${projectName}`);
		console.log("  pnpm dev");
	} catch (error) {
		console.error("❌ An error occurred:", error);
		process.exit(1);
	}
}

main();
