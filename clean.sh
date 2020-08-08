rm -rf ./dist ./out ./build .parcel-cache/ ./third-party/\@salesforce-design-system-react
mkdir -p ./dist/icons ./third-party/\@salesforce-design-system-react
cp -R node_modules/\@salesforce-ux/design-system/assets/icons ./dist
cp -R node_modules/\@salesforce/design-system-react/* ./third-party/\@salesforce-design-system-react
