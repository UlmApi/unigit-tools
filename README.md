# Readme

## po-parser

	$ make all

or

	$ make specific dir=pdf/MAWI/*.pdf

Naming scheme for pdfs: `YYYY-MM-DD_studiengang_[ba|ma|k|vk|pj|zw].pdf`

Studiengang takes these values:

	molmed, humanmed, elektrotechnik, mathematik, chemie, biochemie, chemiengenieurwesen,
	pharmazeutische.biotechnologie, energy.science.and.technology, advanced.materials,
	chemie, biologie_biology, mathem.biometrie, cse, finance, medieninformatik,
	informatik, informationssystemtechnik, communications.technology,
	informationstechnologie, informatik.intensiv, biologie, psychologie,
	software.engineering, advanced.oncology

Directory structure:

	pdf/LEHRAMT/
		zw = Zwischenprüfung

	pdf/MED/
		k = Klinischer Studienabschnitt
		vk = Vorklinischer Studienabschnitt
		pj = Praktisches Jahr
		
	pdf/*/
		ba = Bachelor
		ma = Master
		diplom = Diplom
