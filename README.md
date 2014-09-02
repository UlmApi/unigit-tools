# Unigit Tools

Command line tool to convert official exam regulations of the University of Ulm given as PDF files into Markdown. The converted files can be found at [UlmApi/unigit](https://github.com/UlmApi/unigit).

## Installation

	$ git clone https://github.com/UlmApi/unigit-tools.git
	$ cd unigit-tools
	$ npm install

The tool is not available at [npm](http://npms.org) yet.

## Usage

Convert exam regulations (German: "Prüfungsordnung") given as PDF file:

	$ ./bin/unigit po in.pdf > out.md

