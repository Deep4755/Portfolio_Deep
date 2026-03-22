# Hostinger Deployment Guide

## Pre-Deployment Checklist ✅

- [x] Vite config optimized for production
- [x] Base path set to '/' for root deployment
- [x] All external links have security attributes
- [x] Images optimized and paths correct
- [x] Build process tested and working
- [x] .htaccess file included for optimization

## Build Process

1. **Install dependencies** (if not already done):
```bash
cd Frontend
npm install
```

2. **Build for production**:
```bash
npm run build
```

3. **Verify build output**:
- Check `Frontend/dist/` folder contains:
  - `index.html`
  - `assets/` folder with CSS and JS files
  - `vite.svg` (favicon)
  - `.htaccess` (optimization file)

## Hostinger Deployment Steps

### Method 1: File Manager (Recommended)

1. **Login to Hostinger Control Panel**
2. **Open File Manager**
3. **Navigate to public_html folder**
4. **Clear existing files** (if any)
5. **Upload all contents from `Frontend/dist/` folder**:
   - `index.html`
   - `assets/` folder (entire folder)
   - `vite.svg`
   - `.htaccess`

### Method 2: FTP Upload

1. **Use FTP client** (FileZilla, WinSCP, etc.)
2. **Connect to your Hostinger FTP**
3. **Navigate to public_html directory**
4. **Upload all files from `Frontend/dist/`**

## File Structure After Deployment

```
public_html/
├── index.html
├── vite.svg
├── .htaccess
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

## Post-Deployment Verification

1. **Visit your domain** - Portfolio should load correctly
2. **Test all navigation links** - Should scroll to sections
3. **Test external links** - Should open in new tabs
4. **Check mobile responsiveness**
5. **Verify project links work**:
   - QuickBreak: https://quick-break-backend.onrender.com
   - Local Carpet Fitter: https://localcarpetfitter.co.uk

## Performance Features Included

- ✅ **Gzip Compression** - Faster loading
- ✅ **Browser Caching** - Improved repeat visits
- ✅ **Minified Assets** - Smaller file sizes
- ✅ **Security Headers** - Enhanced security
- ✅ **Lazy Loading** - Optimized image loading

## Troubleshooting

### If site doesn't load:
- Check file permissions (755 for folders, 644 for files)
- Ensure index.html is in public_html root
- Clear browser cache

### If images don't show:
- Verify all images are external URLs (Unsplash)
- Check browser console for errors

### If styles are broken:
- Ensure assets folder uploaded correctly
- Check .htaccess file is present

## Build Information

- **Build Tool**: Vite 7.3.1
- **Output Directory**: `dist/`
- **Minification**: esbuild
- **Bundle Size**: ~221KB JS, ~25KB CSS
- **Gzipped Size**: ~67KB JS, ~5KB CSS

## Contact for Issues

If you encounter any deployment issues:
- Check browser console for errors
- Verify all files uploaded correctly
- Contact Hostinger support if server-related

---

**Your portfolio is now ready for production deployment!** 🚀