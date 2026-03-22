#!/usr/bin/env node

/**
 * Deployment preparation script for Hostinger
 * Run with: node deploy.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Preparing portfolio for Hostinger deployment...\n');

try {
  // Step 1: Clean previous build
  console.log('1️⃣ Cleaning previous build...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  console.log('✅ Clean completed\n');

  // Step 2: Build for production
  console.log('2️⃣ Building for production...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed\n');

  // Step 3: Verify build output
  console.log('3️⃣ Verifying build output...');
  const distPath = 'dist';
  const requiredFiles = ['index.html', 'vite.svg', '.htaccess'];
  const requiredDirs = ['assets'];

  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(distPath, file))) {
      throw new Error(`Missing required file: ${file}`);
    }
  }

  for (const dir of requiredDirs) {
    if (!fs.existsSync(path.join(distPath, dir))) {
      throw new Error(`Missing required directory: ${dir}`);
    }
  }
  console.log('✅ All required files present\n');

  // Step 4: Display file sizes
  console.log('4️⃣ Build summary:');
  const stats = fs.statSync(path.join(distPath, 'index.html'));
  console.log(`📄 index.html: ${(stats.size / 1024).toFixed(2)} KB`);
  
  const assetsDir = path.join(distPath, 'assets');
  const assetFiles = fs.readdirSync(assetsDir);
  
  assetFiles.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const fileStats = fs.statSync(filePath);
    const sizeKB = (fileStats.size / 1024).toFixed(2);
    console.log(`📦 ${file}: ${sizeKB} KB`);
  });

  console.log('\n🎉 Portfolio is ready for deployment!');
  console.log('\n📋 Next steps:');
  console.log('1. Upload all contents from the "dist" folder to your Hostinger public_html');
  console.log('2. Ensure .htaccess file is uploaded for optimization');
  console.log('3. Test your live site after deployment');
  console.log('\n🔗 Files to upload: dist/* (all contents)');

} catch (error) {
  console.error('❌ Deployment preparation failed:', error.message);
  process.exit(1);
}