			function exportExcel(divs){
			    var dt = new Date();
			    var day = dt.getDate();
			    var month = dt.getMonth() + 1;
			    var year = dt.getFullYear();
			    var hour = dt.getHours();
			    var mins = dt.getMinutes();
			    var postfix = day + "." + month + "." + year + "_" + hour + "." + mins;
			    var a = document.createElement("a");
			    var data_type = "data:application/vnd.ms-excel; charset=iso-8859-1" ;
			
			    var table_div = "";
			    var table_html = ""
			    var divsTratadas = divs.split(",");
			    for (i = 0; i < divsTratadas.length; i++) {  // grid_main_columns grid_main-grid_records 
			        table_div = document.getElementById(divsTratadas[i]); 
			        table_html += table_div.outerHTML.replace(/ /g, "%20")
			        .replace(/ô/g, "o").replace(/Ô/g, "O")
			        .replace(/ó/g, "o").replace(/Ó/g, "O")
			        .replace(/á/g, "a").replace(/Á/g, "A")
			        .replace(/â/g, "a").replace(/Â/g, "A")
					.replace(/ã/g, "a").replace(/Ã/g, "A")
			        .replace(/é/g, "e").replace(/É/g, "E")
			        .replace(/ê/g, "e").replace(/Ê/g, "E")
			        .replace(/í/g, "i").replace(/Í/g, "I")
			        .replace(/ú/g, "u").replace(/Ú/g, "U")
			        .replace(/ç/g, "c").replace(/Ç/g, "C");
			    }
			    a.href = data_type + ", "  + table_html;
			    a.download = "planilha_" + postfix + ".xls";
			    a.click();
			    e.preventDefault();
			}