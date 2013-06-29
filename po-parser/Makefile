default: all

all:
	php po-parser.php ./pdf/MAWI/*.pdf
	php po-parser.php ./pdf/IN/*.pdf
	php po-parser.php ./pdf/LEHRAMT/*.pdf
	php po-parser.php ./pdf/MED/*.pdf
	php po-parser.php ./pdf/NAWI/*.pdf
	php po-parser.php ./pdf/*.pdf

specific:
	php po-parser.php $(dir)

clean:
	rm -r tmp/ md/
