supertuesday.nw: index.html package.json js/supertuesday.js
	zip supertuesday.nw index.html js/supertuesday.js package.json

.PHONY: run
run: supertuesday.nw
	nw supertuesday.nw

.PHONY: clean
clean:
	rm supertuesday.nw
