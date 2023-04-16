#!/bin/bash
name=$1
mkdir "$name"
cp required/* -r "$name"
code "$name"/sketch.js