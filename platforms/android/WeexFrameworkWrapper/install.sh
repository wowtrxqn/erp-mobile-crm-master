#!/usr/bin/env bash
echo "开始更新依赖库"
rm -r wxframework/
rm -r nexus/
rm -r sdk/

git clone https://github.com/bmfe/WeexErosFramework.git "wxframework"

git clone https://github.com/bmfe/eros-nexus.git "nexus"

git clone https://github.com/bmfe/eros-plugin-android-getui.git "erosplugingt"

cd wxframework
git checkout master
cd ../

cd nexus
git checkout master
cd ../

cd erosplugingt
git checkout master
cd ../

echo "依赖库更新完成"
