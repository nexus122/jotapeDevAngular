#!/bin/sh
ls -1 src/assets/articulos | grep -E '\.md$' | jq -R . | jq -s '{nombres: .}'