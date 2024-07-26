$(document).ready(function(){
	$(".desactive").attr("disabled","disabled");
	$(".desactiveRole").attr("disabled","disabled");
	$(".none").css("display","none");
});
function envoiForm(){
	document.forms["formSearch"].submit();
}
function getCash(mode) {
	if(mode == 'cashdispoF'){
		var email	=	document.getElementById("email").value;
		var libelleC	=	document.getElementById("codeCaisse").value;
		var page = "ouvertureCaisse";
		$.ajax({
			type : 'get',
			url : 'CRUDOuvFer?cruds=tester',
			dataType: 'json',
			data : {
				nomCaissier: email,
				libelleC: libelleC,
				page: page
			}, success : function(result){
				$.each(result, function(index, value){
					document.getElementById("cashO").value = "";
					document.getElementById("diff").value = "";
					document.getElementById("dateo").value = "";
					
					var montt = value.montant;
					var convertir = montt.toLocaleString("fr-FR");
					document.getElementById("cashF").value	=	montt;
				});
			}
		});
	}
	if(mode == 'exam'){
		if($("#exam").attr("checked") == "checked"){
			$("#exams").removeAttr("readonly","readonly");
			$("#exams").css("background","none");
		} else{
			$("#exams").attr("readonly","readonly");
			$("#exams").css("background","#c0d4f5");
			$("#exams").val('0');
		}
	}	
}
function pad2(n) {
	 return (n < 10 ? '0' : '') + n;
}
function getDiff() {
	var cashF = document.getElementById("cashF").value;
	var cashO = document.getElementById("cashO").value
	var input = document.getElementById("cashO").value.replace(/[\D\s\._\ - ] +/g, '');
	
	var cashOs = parseInt(input, 10);
	
	var date = new Date();
	var month = pad2(date.getMonth()+1);
	var day = pad2(date.getDate());
	var year= date.getFullYear();

	var formattedDate =  year+"-"+month+"-"+day;
	
	/*====== un petit test =======*/
	var taille	=	cashO.length;
	var quotient = taille / 3;
	var qt	=	parseInt(quotient, 10);
	var reste	=	taille % 3;
	var a =0;
	if(reste!=0)
		a = cashO.substring(0,reste);
	else
		a = cashO.substring(0,3);
	var dispoc =a;
	if(qt!=0){
		for(let i=1;i<qt+1;i++)
			var j = i*3;
			if(j==3)
				var b = cashO.substring(reste,j+reste);
				if(reste==0)
					dispoc = a;
				else
					dispoc = a+" "+b;

	}
	/*======== la fin du test =====*/
	
	var diff = cashF - cashOs;
	if(isNaN(cashO)){
		document.getElementById("cashO").value = "";
		document.getElementById("diff").value = "";
	}else{
		document.getElementById("cashO").value = cashOs;
		document.getElementById("diff").value = diff;
	}
	document.getElementById("dateo").value = formattedDate;
}
function getService(mode){
	if(mode=='libelle'){
		var lib	=	document.getElementById("libelle").value;
		document.getElementById("libelle").value = lib.toUpperCase();
	}
	if(mode=='type'){
		var type	=	document.getElementById("type").value;
		if(type=='Obligatoire')
			$("#position").removeAttr("disabled");
			$("#position").attr("required","required");
		if(type=='Facultatif' || type=='')
			$("#position").attr("disabled","disabled");
	}
	if(mode=='responsable'){
		var resp	=	document.getElementById("responsable").value;
		document.getElementById("responsable").value = resp.toUpperCase();
	}
	if(mode=='portable'){
		var portable	=	document.getElementById("portable").value;
		var phone = portable.replace("-","");
		
		var a, b, c, d, e;
		/*if(phone.length > 2 && phone.length <= 4) 
			document.getElementById("portable").value = phone.substring(0,2) + "-" + phone.substring(2);
		if(phone.length > 4 && phone.length <= 6) 
			document.getElementById("portable").value = phone.substring(0,2) + "-" + phone.substring(2,4) + "-" + phone.substring(4);
		if(phone.length > 6 && phone.length <= 8){
			a = phone.substring(0,2); b = phone.substring(2,4); c = phone.substring(4,6); d = phone.substring(6);
			document.getElementById("portable").value = a + "-" + b + "-" + c + "-" + d;
		}*/
		if(phone.length > 8 && phone.length <= 10) {
			a = phone.slice(0,2); b = phone.slice(2,4); c = phone.slice(4,6); d = phone.slice(6,8); e = phone.slice(8);
			document.getElementById("portable").value = a + "-" + b + "-" + c + "-" + d + "-" + e;
		}
	}
	if(mode=='montant'){
		var echeance	=	document.getElementById("echeance").value;
		var montant	=	document.getElementById("montant").value;
		var input = montant.replace(/[\D\s\._\ - ] +/g, '');
		var montantT = input;
		if(echeance=='Mensuel')
			montantT = input*12;
		if(echeance=='Trimestriel')
			montantT = input*3;
		if(echeance=='Semestriel')
			montantT = input*6;
		document.getElementById("montantT").value = montantT;
	}
	if(mode=='service'){
		var code	=	document.getElementById("service").value;
		var page = "ajax";
		$.ajax({
			type : 'post',
			url : 'CRUDService?crud=ajax1',
			dataType: 'json',
			data : {
				code: code,
				page: page
			}, success : function(result){
				$.each(result, function(index, value){
					
					var code = value.type;
					var libelle = value.statut;
					if(code=='Obligatoire'){
						$("#position").removeAttr("disabled");
					}else{$("#position").attr("disabled","disabled");}
					
					var opt1 = '<option>'+code+'</option>';
					var opt2 = '<option>'+libelle+'</option>';
					
					document.getElementById("type").innerHTML	=	opt1;
					document.getElementById("statut").innerHTML	=	opt2;
				});
			}
		});
	}
}
function envoiCash(){
	var cashF = document.getElementById("cashF").value;
	var cashO = document.getElementById("cashO").value
	if(cashF > cashO){
		document.getElementById("dif").style.display = "block";
		return false;
	}
}
function prise(mode){
	if(mode=='reduction'){
		$("#pr").removeAttr("checked");
		$("#re").attr("checked","checked");
		document.getElementById("priseEn").style.display = "none";
		document.getElementById("reduction").style.display = "block";
	}
	if(mode=='prise'){
		$("#re").removeAttr("checked");
		$("#pr").attr("checked","checked");
		document.getElementById("reduction").style.display = "none";
		document.getElementById("priseEn").style.display = "block";
	}
		
}
function pourcentage(mode){
	var total = document.getElementById("total").value;
	if(mode=='red'){
		var montant = document.getElementById("montR").value;
		var input = montant.replace(/[\D\s\._\ - ] +/g, '');
		document.getElementById("pourcR").value = (100*input/total).toFixed(2);
	}
	if(mode=='prise'){
		var montant = document.getElementById("montP").value;
		var input = montant.replace(/[\D\s\._\ - ] +/g, '');
		document.getElementById("pourcP").value = (100*input/total).toFixed(2);
	}
}
function modif(mode){
	var page = document.getElementById("page").value;
	var id = document.getElementById("id").value;
	var idP = "";
	if(mode=='tab3')
		idP=document.getElementById("idP").value;
	$.ajax({
		type : 'post',
		url : 'ajax',
		dataType: 'json',
		data : {
			page: page,
			id: id,
			idP: idP,
			crud: mode
		}, success : function(result){
			$.each(result, function(index, value){
				if(mode=='tab1'){
					$("#pr").removeAttr("checked");
					$("#re").attr("checked","checked");
					document.getElementById("priseEn").style.display = "none";
					document.getElementById("reduction").style.display = "block";
					document.getElementById("montR").value = value.montant.toFixed(2);
					document.getElementById("pourcR").value = value.pourcent.toFixed(2);
				}
				if(mode=='tab3'){
					$("#re").removeAttr("checked");
					$("#pr").attr("checked","checked");
					document.getElementById("reduction").style.display = "none";
					document.getElementById("priseEn").style.display = "block";
					document.getElementById("struct").value = value.structure;
					document.getElementById("montP").value = value.montant.toFixed(2);
					document.getElementById("pourcP").value = value.pourcent.toFixed(2);
					document.getElementById("rec").value = value.recu;
					document.getElementById("idPr").value = value.idP;
					$("#btnM").removeAttr("disabled");
				}
			});
		}
	});
}
function ouvFermer(mode){
	if(mode=='ferme'){
		document.getElementById("supp").style.display = "none";
		return false;
	}
	if(mode=='ouvR'){
		document.getElementById("supp").style.display = "block";
		document.getElementById("supR").style.display = "block";
		document.getElementById("supP").style.display = "none";
	}
	if(mode=='ouvP'){
		var idP = document.getElementById("idP").value;
		document.getElementById("supp").style.display = "block";
		document.getElementById("supP").style.display = "block";
		document.getElementById("supR").style.display = "none";
		document.getElementById("idpr").value = idP;
	}
	if(mode=='ouvS'){
		document.getElementById("supp").style.display = "block";
		document.getElementById("typeSup").value = "supP";
	}
	if(mode=='ouvSS'){
		document.getElementById("supp").style.display = "block";
		document.getElementById("typeSup").value = "supS";
	}
	if(mode=='ajoutE'){
		document.getElementById("supp").style.display = "block";
		return false;
	}
	if(mode=='ouvDet'){
		document.getElementById("HeadDet").innerHTML = "DETAIL ECOLE";
		document.getElementById("ecolContrat").style.display = "none";
		document.getElementById("detailEc").style.display = "block";
		document.getElementById("detailEcoles").style.display = "block";
	}
	if(mode=='ouvContrat'){
		document.getElementById("HeadDet").innerHTML = "CONTRAT-ECOLE";
		document.getElementById("detailEc").style.display = "none";
		document.getElementById("ecolContrat").style.display = "block";
		document.getElementById("detailEcoles").style.display = "block";
	}
	if(mode=='ferDet'){
		document.getElementById("detailEcoles").style.display = "none";
		return false;
	}
	if(mode=='ouvNiv'){
		document.getElementById("niveauxMat").style.display = "block";
	}
	if(mode=='ferNiv'){
		document.getElementById("niveauxMat").style.display = "none";
		return false;
	}
	if(mode=='ajout'){
		document.getElementById("tPM").style.display = "none";
		document.getElementById("formAdd").style.display = "block";
		document.getElementById("add").style.display = "none";
		document.getElementById("move").style.display = "inline";
		document.getElementById("val").style.display = "inline";
		
	}
	if(mode=='list'){
		document.getElementById("formAdd").style.display = "none";
		document.getElementById("tPM").style.display = "inline";
		document.getElementById("move").style.display = "none";
		document.getElementById("add").style.display = "block";
		document.getElementById("val").style.display = "none";
	}
	if(mode=='ouvEch'){
		document.getElementById("echeanciers").style.display = "block";
	}
	if(mode=='ferEch'){
		document.getElementById("echeanciers").style.display = "none";
	}
	if(mode=='ouvServ'){
		document.getElementById("niveauxServ").style.display = "block";
	}
	if(mode=='ferServ'){
		document.getElementById("niveauxServ").style.display = "none";
	}
	if(mode=='ouvTm'){
		document.getElementById("tm").style.display = "block";
	}
	if(mode=='ferTm'){
		document.getElementById("tm").style.display = "none";
	}
	if(mode=='add'){
		var nbre = parseInt(document.getElementById("nbre").value, 10) + 1;
		var id = document.getElementById("idClasse").value;
		var pair = "pair";
		var impair = "impair";
		var move = 'move';
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				id: id,
				crud: mode
			}, success : function(result){
				var op1 = "";
				var nbre1 = 0;
				var op2 = "";
				var nbre2 = 0;
				$.each(result, function(index, value){
					if(value.tp == 'mat'){
						nbre1 += 1;
						op1 += '<option class="${'+nbre1+' % 2 == 0 ? \'pair\' : \'impair\'}" value="'+value.mat+'">'+value.mat+'</option>';
					}
					if(value.tp == 'pers'){
						nbre2 += 1;
						op2 += '<option class="${'+nbre2+' % 2 == 0 ? \'pair\' : \'impair\'}" value="'+value.matr+'">'+value.pers+'</option>';
					}
				});
				var addHtml = '<div class="tr" id="ligne'+nbre+'"><div class="td" style="width:60%;">';
				addHtml	+= '<select name="prof'+nbre+'" style="width:100%;" class="input-sm" required><option selected></option>';
				addHtml	+= '<option value="'+op2+'">'+op2+'</option></select></div><div class="td" style="width:30%;">';
				addHtml	+= '<select name="mat'+nbre+'" style="width:100%;" class="input-sm" required><option selected></option>';
				addHtml	+= op1+'</select></div><div class="td" style="width:10%;text-align:center;">';
				addHtml	+= '<span onclick="suppPM(this);">-</span></div></div>';
				$("#ajoutPM").append(addHtml);
				document.getElementById("nbre").value = nbre;
			}
		});
	}
}
function suppPM(tag){
	var nbre = parseInt(document.getElementById("nbre").value, 10) - 1;
	var parent	=	$(tag).parent().parent();
	parent.remove();
	document.getElementById("nbre").value = nbre;
}
function addProf(tag){
	
}
function ouvrirS(tag){
	var parent	=	$(tag).parent();
	var valeur = parent.find("input").val();
	document.getElementById("supp").style.display = "block";
	document.getElementById("typeSup").value = "supS";
	document.getElementById("idS").value = valeur;
}
function montantSaisi(mode){
	if(mode=='saisi'){
		var mttSaisi = document.getElementById("mttSaisi").value.replace(/[\D\s\._\ - ] +/g, '');
		if(isNaN(parseInt(mttSaisi, 10)))
			document.getElementById("mttSaisi").value = 0;
		else
			document.getElementById("mttSaisi").value = parseInt(mttSaisi, 10);
		
		document.getElementById("alert").style.display="none";
	}
	if(mode=='envoi'){
		var solde = document.getElementById("solde").value;
		var mttSaisi = document.getElementById("mttSaisi").value.replace(/[\D\s\._\ - ] +/g, '');
		
		var input	=	parseInt(solde, 10);
		var input1 = parseInt(mttSaisi, 10);
		if(input1 > input){
			document.getElementById("alert").style.display="block";
			document.getElementById("alert").innerHTML="Le montant saisi est supérieur au solde.";
			return false;
		}
	}
	if(mode=='openS'){
		document.getElementById("pop").style.display="block";
		document.getElementById("details").style.display="none";
		document.getElementById("paieSer").style.display="block";
		document.getElementById("typeS").value="ajout";
		return false;
	}
	if(mode=='openD'){
		document.getElementById("pop").style.display="block";
		document.getElementById("paieSer").style.display="none";
		document.getElementById("details").style.display="block";
	}
	if(mode=='openM'){
		
	}
	if(mode=='openMS'){
		
	}
	if(mode=='fermer'){
		document.getElementById("pop").style.display="none";
	}
	if(mode=='selectService'){
		var libelle = document.getElementById("libelle").value;
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				libelle: libelle,
				crud: mode
			}, success : function(result){
				$.each(result, function(index, value){
					document.getElementById("montantS").value = value.montant;
				});
			}
		});
	}
	if(mode=='saisiServicce'){
		var mttSaisi = document.getElementById("saisiServicce").value.replace(/[\D\s\._\ - ] +/g, '');
		var mttServ = document.getElementById("montantS").value;
		if(isNaN(parseInt(mttSaisi, 10)))
			document.getElementById("saisiServicce").value = 0;
		else
			document.getElementById("saisiServicce").value = parseInt(mttSaisi, 10);
		
		document.getElementById("alertS").style.display="none";
		if(parseInt(mttSaisi, 10) > parseInt(mttServ, 10))
			document.getElementById("alertS").style.display="block";
			document.getElementById("alertS").innerHTML="Le montant saisi est supérieur.";
			
	}
	if(mode=='envoiS'){
		var mttSaisi = document.getElementById("saisiServicce").value;
		var mttServ = document.getElementById("montantS").value;
		
		var input	=	parseInt(mttServ, 10);
		var input1 = parseInt(mttSaisi, 10);
		if(input1 > input){
			document.getElementById("alertS").style.display="block";
			document.getElementById("alertS").innerHTML="Le montant saisi est supérieur.";
			return false;
		}
	}

}
function fer(){$("#messageAlert").toggle();}
function addPhoto(mode){
	var fd = new FormData();
	var ident = document.getElementById("ident").value;
    var files = $('#file')[0].files[0];
    
    fd.append('ident',ident);
    fd.append('file',files);
    fd.append('mode',mode);
    $.ajax({
        url:'photo',
        type:'post',
        data:fd,
        contentType: false,
        processData: false,
        success:function(response){
        	if(mode =='eleve'){
        		document.getElementById("photoUser").innerHTML = "<img src='${pageContext.request.contextPath}/Disque//fichiers/imgs_2/"+response+"' />";
        	}
        	if(mode =='professeur'){
        		var imm = '${pageContext.request.contextPath}/Disque//fichiers/temporaire/'+response;
        		$("#imgs").attr("src",imm);
               /* $('.preview img').show();
        		document.getElementById("photoUser").innerHTML = "<img src='${pageContext.request.contextPath}/Disque/fichiers/temporaire/14503385b.jpg' />";*/
        	}
        }
    });
}
function proCompte(){
	var mat = document.getElementById("matPro").value.replace(/[\D\s\._\ - ] +/g, '');
	if(mat.length < 6)
		document.getElementById("matPro").value=mat//parseInt(mat, 10)+'MT';
	else
		document.getElementById("matPro").value=parseInt(mat, 10)+'MT';
}
function ajax(mode){
	if(mode=='getCompte'){
		var numeroC = document.getElementById("nCompte").value;
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				libelle: numeroC,
				crud: mode
			}, success : function(result){
				$.each(result, function(index, value){
					var date = new Date();
					var month = pad2(date.getMonth()+1);
					var day = pad2(date.getDate());
					var year= date.getFullYear();

					var formattedDate =  year+"-"+month+"-"+day;
					
					document.getElementById("dateD").value = formattedDate;
					document.getElementById("fonction").value = value.fonct;
					document.getElementById("portable").value = value.tel;
					document.getElementById("compte").value = value.solde+' FR';
					
					document.getElementById("disp").style.display = "none";
					$(".nonR").css("display","block");
					$(".nonJ").css("display","block");
					document.getElementById("justifiables").value = "";
					document.getElementById("justifie").value = "";
					document.getElementById("remboursables").value = "";
					document.getElementById("dateLR").value = "";
				});
			}
		});
	}
	if(mode=='mtDec'){
		var mtDec = document.getElementById("montantD").value.replace(/[\D\s\._\ - ] +/g, '');
		var input1 = parseInt(mtDec, 10);
		if(isNaN(input1))
			document.getElementById("montantD").value = 0;
		else document.getElementById("montantD").value = input1;
	}
	if(mode=='getType'){
		var codeType = document.getElementById("typeDec").value;
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				libelle: codeType,
				crud: mode
			}, success : function(result){
				$.each(result, function(index, value){
					if(value.justifiable=='Oui' && value.remboursable=='Oui'){
						document.getElementById("disp").style.display = "none";
						$(".nonR").css("display","block");
						document.getElementById("justifiables").value = value.justifiable;
						$(".nonJ").css("display","block");
						document.getElementById("justifie").value = 'Non';
						document.getElementById("remboursables").value = value.remboursable;
						document.getElementById("dateLR").value = value.date;
					}
					if(value.justifiable=='Oui' && value.remboursable=='Non'){
						document.getElementById("justifiables").value = value.justifiable;
						$(".nonJ").css("display","block");
						document.getElementById("justifie").value = 'Non';
						document.getElementById("remboursables").value = value.remboursable;
						document.getElementById("disp").style.display = "block";
						$(".nonR").css("display","none");
					}
					if(value.justifiable=='Non' && value.remboursable=='Oui'){
						document.getElementById("disp").style.display = "block";
						$(".nonR").css("display","block");
						document.getElementById("justifiables").value = value.justifiable;
						document.getElementById("remboursables").value = value.remboursable;
						document.getElementById("dateLR").value = value.date;
						$(".nonJ").css("display","none");
					}
					if(value.justifiable=='Non' && value.remboursable=='Non'){
						document.getElementById("justifiables").value = value.justifiable;
						document.getElementById("remboursables").value = value.remboursable;
						$(".nonJ").css("display","none");$(".nonR").css("display","none");
						document.getElementById("disp").style.display = "none";
					}
				});
			}
		});
	}
	if(mode=='ouvrir'){
		document.getElementById("intervalMontant").style.display="block";
	}
	if(mode=='close'){
		document.getElementById("intervalMontant").style.display="none";
	}
	if(mode=='getPersonnel'){
		var matricule = document.getElementById("validateur").value;
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				matricule: matricule,
				crud: mode
			}, success : function(result){
				$.each(result, function(index, value){
					
					document.getElementById("fonction").value = value.fonction;
					document.getElementById("departement").value = value.departement;
					document.getElementById("responsable").value = value.responsable;
					document.getElementById("portablePro").value = value.portablePro;
					document.getElementById("portablePerso").value = value.portablePerso;
					document.getElementById("fixePro").value = value.fixePro;
					document.getElementById("fixePerso").value = value.fixePerso;
					document.getElementById("emailPro").value = value.emailPro;
					document.getElementById("emailPerso").value = value.emailPerso;
					document.getElementById("matrimoniale").value = value.matrimoniale;
					document.getElementById("sexe").value = value.sexe;
					document.getElementById("statut").value = value.statut;
					document.getElementById("societe").value = value.societe;
				});
			}
		});
	}
	if(mode=='branche'){
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				libelle: document.getElementById("branche").value,
				crud: mode
			}, success : function(result){
				var option = "";
				$.each(result, function(index, value){
					option += '<option value="'+value.libelle+'">'+value.libelle+'</option>';
					
				});
				document.getElementById("niveaux").innerHTML = option;
			}
		});
	}
	if(mode=='niveau'){
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				libelle: document.getElementById("niveaux").value,
				crud: mode
			}, success : function(result){
				var option = '<option value="" selected>----choix----</option>';
				$.each(result, function(index, value){
					option += '<option value="'+value.libelle+'">'+value.libelle+'</option>';
					
				});
				document.getElementById("classe").innerHTML = option;
			}
		});
	}
	if(mode=='classe'){
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				libelle: document.getElementById("classe").value,
				crud: mode
			}, success : function(result){
				document.getElementById("tbodyT1").innerHTML ="";
				document.getElementById("tbodyT2").innerHTML ="";
				var option = '<option value="" selected>----choix----</option>';
				var  boucle = 0;
				$.each(result, function(index, value){
					if(value.element == "matiere"){
						option += '<option value="'+value.matieres+'">'+value.matieres+'</option>';
					}
					if(value.element == "eleve"){
						boucle += 1; var ligne	=	"";
						if(boucle % 2 == 0) {ligne = "pair"}else{ligne = "impair"}
						var tr = '<div class="tr '+ligne+'">';
							tr += '<div class="td" style="width:16%;text-align:center;"><input type="hidden" name="mat-'+boucle+'" value="'+value.matriculeEc+'">'+value.matricule+'</div>';
							tr += '<div class="td" style="width:35%;">'+value.nom+'</div></div>';
						var tr1 = '<div class="tr '+ligne+'">';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT1-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT2-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT3-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT4-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT5-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT6-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT7-'+boucle+'" class="outL" placeholder="0"></div>';
							tr1 += '<div class="td" style="width:11%;"><input type="text" oninput="if(isNaN(parseInt(this.value, 10))) this.value =0;else if(parseInt(this.value, 10)>22) this.value =0;else this.value = parseInt(this.value, 10);" name="NT8-'+boucle+'" class="outL" placeholder="0"></div></div>';
						$("#tbodyT1").append(tr);
						$("#tbodyT2").append(tr1);
					}
				});
				document.getElementById("entier").value =boucle;
				document.getElementById("tl").value =boucle;
				document.getElementById("matiere").innerHTML = option;
			}
		});
	}
	if(mode=='note'){
		var mat = document.getElementById("matiere").value;
		if(mat != null && mat != ""){
			$.ajax({
				type : 'post',
				url : 'ajax',
				dataType: 'json',
				data : {
					libelle: document.getElementById("classe").value,
					numero: document.getElementById("nt").value,
					crud: mode
				}, success : function(result){
					document.getElementById("tbody").innerHTML ="";
					var option = '<option value="" selected>----choix----</option>';
					var  boucle = 0;
					$.each(result, function(index, value){
						if(value.element == "matiere"){
							option += '<option value="'+value.matieres+'">'+value.matieres+'</option>';
						}
						if(value.element == "eleve"){
							boucle += 1; var ligne	=	"";
							if(boucle % 2 == 0) {ligne = "pair"}else{ligne = "impair"}
							var tr = '<div class="tr '+ligne+'">';
								tr += '<div class="td" style="width:6%;text-align:center;">'+boucle+'</div>';
								tr += '<div class="td" style="width:16%;text-align:center;"><input type="hidden" name="mat'+boucle+'" value="'+value.matriculeEc+'">'+value.matricule+'</div>';
								tr += '<div class="td" style="width:35%;">'+value.nom+'</div>';
								tr += '<div class="td" style="width:16%;text-align:center;">'+value.niveau+'</div>';
								tr += '<div class="td" style="width:16%;text-align:center;">'+value.classe+'</div>';
								tr += '<div class="td" style="width:11%;"><input type="text" name="note'+boucle+'" class="outL" placeholder="0"></div></div>';
							
							$("#tbody").append(tr);
						}
					});
					document.getElementById("entier").value =boucle;
					document.getElementById("matiere").innerHTML = option;
				}
			});
		}
	}
	if(mode=='echeancier'){
		var id = document.getElementById("idN").value;
		var v1 = document.getElementById("v_1").value;
		var v2 = document.getElementById("v_2").value;
		var v3 = document.getElementById("v_3").value;
		var v4 = document.getElementById("v_4").value;
		var v5 = document.getElementById("v_5").value;
		var dt1 = document.getElementById("dt_1").value;
		var dt2 = document.getElementById("dt_2").value;
		var dt3 = document.getElementById("dt_3").value;
		var dt4 = document.getElementById("dt_4").value;
		var dt5 = document.getElementById("dt_5").value;
	    $.ajax({
	        url:'ajax',
	        type:'post',
	        dataType: 'json',
	        data: {
	        	v1: v1, v2: v2,
	        	v3: v3,  v4: v4,
	     	    v5: v5, id: id, dt1: dt1, dt2: dt2,
	     	    dt3: dt3,  dt4: dt4, 
	     	    dt5: dt5, crud: mode
			},success:function(response){
	        	$.each(response, function(index, value){
		        	var v1 = document.getElementById("v_1").value = value.v1;
		    		var v2 = document.getElementById("v_2").value = value.v2;
		    		var v3 = document.getElementById("v_3").value = value.v3;
		    		var v4 = document.getElementById("v_4").value = value.v4;
		    		var v5 = document.getElementById("v_5").value = value.v5;
		    		var dt1 = document.getElementById("dt_1").value = value.dt1;
		    		var dt2 = document.getElementById("dt_2").value = value.dt2;
		    		var dt3 = document.getElementById("dt_3").value = value.dt3;
		    		var dt4 = document.getElementById("dt_4").value = value.dt4;
		    		var dt5 = document.getElementById("dt_5").value = value.dt5;
	        	});
	        }
	    });
	}
}
/* ======= ANNEES SCOLAIRE ====== */
function getdate(mode){
	/* debut annee et fin annee*/
	var debut = document.getElementById('debut').value
	var fin = document.getElementById('fin').value
	
	/* trimestre*/
	var dbTim1 = document.getElementById('dbTim1').value
	var fnTim1 = document.getElementById('fnTim1').value
	var dbTim2 = document.getElementById('dbTim2').value
	var fnTim2 = document.getElementById('fnTim2').value
	var dbTim3 = document.getElementById('dbTim3').value
	var fnTim3 = document.getElementById('fnTim3').value
	
	/*semestre*/
	var dbSem1 = document.getElementById('dbSem1').value
	var fnSem1 = document.getElementById('fnSem1').value
	var dbSem2 = document.getElementById('dbSem2').value
	var fnSem2 = document.getElementById('fnSem2').value
	
	if(mode == 'trim') {
		$("#sem").removeAttr("checked","checked");
		$("#trim").attr("checked","checked");
		document.getElementById("semestres").style.display = "none";
		document.getElementById("trimestres").style.display = "block";
	}
	if(mode == 'sem') {
		$("#trim").removeAttr("checked","checked");
		$("#sem").attr("checked","checked");
		document.getElementById("trimestres").style.display = "none";
		document.getElementById("semestres").style.display = "block";
	}
	if(mode == 'debut') {
		var date1 = new Date(debut);
    	var jourdebut= date1.getTime();
    	if(fin != "" && fin != null){
    		var date2 = new Date (fin);
    		var jourfin = date2.getTime();
    		if(jourdebut>jourfin){
    			document.getElementById('debut').value = "";
    			document.getElementById('alert').innerHTML = "<p>date debut est superieur a date fin</>";
    			document.getElementById('messageAlert').style.display = "block";
    		}else{
	    		document.getElementById('dbSem1').value =debut;
	    		document.getElementById('dbTim1').value =debut; 
    		}
    		
    	}else{
    		document.getElementById('dbSem1').value =debut;
    		document.getElementById('dbTim1').value =debut;
    	}
	}
	if(mode == 'fin') {
		var date2 = new Date (fin);
		var jourfin = date2.getTime();
		if(debut != "" && debut != null){
			var date1 = new Date(debut);
	    	var jourdebut= date1.getTime();
	    	if(jourfin<jourdebut){
	    		document.getElementById("fin").value = "";
	    		document.getElementById('alert').innerHTML = "<p>date fin est inferieur a date debut</>";
    			document.getElementById('messageAlert').style.display = "block";
	    	}else{
	    		 document.getElementById('fnSem2').value =fin;
	    		 document.getElementById('fnTim3').value =fin;
	    	}
		}else{
			 document.getElementById('fnSem2').value =fin;
    		 document.getElementById('fnTim3').value =fin;
		}
	}
	/* ======== DECOUPAGE TRIMETRIEL ========= */
	if(mode == 'fnTim1') {
		/* ===== fin ===== */
		var dateF1 = new Date(fnTim1);
			var fn1 = dateF1.getTime();
		
    	if(dbTim1 != "" && dbTim1 != null && fnTim3 != "" && fnTim3 != null){
    		var dateT1 = new Date(dbTim1);
    		var dateF3 = new Date(fnTim3);
    		var db1 = dateT1.getTime();
    		var fn3 = dateF3.getTime();
    		if(fn1 < fn3 && fn1 > db1 ){
    			document.getElementById('dbTim2').value=fnTim1;
    			document.getElementById('fnTim2').value="";
    			document.getElementById('dbTim3').value="";
    		} else {
    			document.getElementById('fnTim1').value="";
    			document.getElementById('dbTim2').value="";
    			document.getElementById('fnTim2').value="";
    			document.getElementById('dbTim3').value="";
    			document.getElementById('alert').innerHTML = "<p>fin premier trimestre  est inferieur a debut premier trimestre" +
    					"ou supérieur  à fin troisième trimestre</>";
    			document.getElementById('messageAlert').style.display = "block";
    		}
    	} else{
    		document.getElementById('fnTim1').value="";
    		document.getElementById('alert').innerHTML = "<p>Veuillez saisir debut et fin année</>";
    		document.getElementById('messageAlert').style.display = "block";
    	}
	}
	if(mode == 'fnTim2') {
		/* ===== fin ===== */
		var dateF2 = new Date(fnTim2);
			var fn2 = dateF2.getTime();
		
    	if(dbTim2 != "" && dbTim2 != null && fnTim3 != "" && fnTim3 != null){
    		var dateT2 = new Date(dbTim2);
    		var dateF3 = new Date(fnTim3);
    		var db2 = dateT2.getTime();
    		var fn3 = dateF3.getTime();
    		if(fn2 < fn3 && fn2 > db2 ){
    			document.getElementById('dbTim3').value=fnTim2;
    		} else {
    			document.getElementById('fnTim2').value="";
    			document.getElementById('dbTim3').value="";
    			document.getElementById('alert').innerHTML = "<p>fin deuxième trimestre est inferieur a debut deuxième trimestre" +
    					"ou supérieur  à fin troisième trimestre</>";
    			document.getElementById('messageAlert').style.display = "block";
    		}
    	} else{
    		document.getElementById('fnTim2').value="";
    		document.getElementById('alert').innerHTML = "<p>Veuillez saisir fin premiere trimestre</>";
    		document.getElementById('messageAlert').style.display = "block";
    	}
	}
	
	/* ======== DECOUPAGE SEMESTRIEL ========= */
	if(mode == 'fnSem1') {
		/* ===== fin ===== */
		var dateF1 = new Date(fnSem1);
			var fn1 = dateF1.getTime();
		
    	if(dbSem1 != "" && dbSem1 != null && fnSem2 != "" && fnSem2 != null){
    		var dateT1 = new Date(dbSem1);
    		var dateF2 = new Date(fnSem2);
    		var db1 = dateT1.getTime();
    		var fn2 = dateF2.getTime();
    		if(fn1 < fn2 && fn1 > db1 ){
    			document.getElementById('dbSem2').value=fnSem1;
    		} else {
    			document.getElementById('fnSem1').value="";
    			document.getElementById('dbSem2').value="";
    			document.getElementById('alert').innerHTML = "<p>fin premier semestre est inferieur a debut premier semestre" +
    					"ou supérieur  à fin deuxième semestre</>";
    			document.getElementById('messageAlert').style.display = "block";
    		}
    	} else{
    		document.getElementById('fnSem1').value="";
    		document.getElementById('alert').innerHTML = "<p>Veuillez saisir debut premiere semestre</>";
    		document.getElementById('messageAlert').style.display = "block";
    	}
	}
}
function reinscription(mode){

	if(mode =='ouvrir'){
		document.getElementById("messageReinscr").style.display = "block";
	}
	if(mode =='fermer'){
		document.getElementById("messageReinscr").style.display = "none";
		return false;
	}
}
function toggles(mode){
	$(".bilan").css("display","none");
	if(mode=='bilan1') $("#bilan1").toggle("slow");
	if(mode=='bilan2') $("#bilan2").toggle("slow");
	if(mode=='Fbilan1') $("#bilan1").css("display","none");
	if(mode=='Fbilan2') $("#bilan2").css("display","none");
	
	if(mode == 'docPop_1'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'doc'){
		$("#docEt").toggle();
	}
	if(mode == 'majm'){
		$("#majm").toggle();
	}
	if(mode == 'expabs'){
		$("#expabs").toggle();
	}
	if(mode == 'docPop_2'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'exl'){
		var ddocPop=document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		}else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_3'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_4'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_5'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_6'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_7'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_8'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_9'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'docPop_10'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'livrets'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	if(mode == 'statis'){
		var docPop = document.getElementById(mode);
		if(docPop.style.display ==="none"){
			$(".docPop").css("display","none");
			docPop.style.display ="block";
		} else $(".docPop").css("display","none");
	}
	
}
function documentations(mode){
	if(mode == 'journalier') document.formBilan.submit();
	if(mode == 'general') document.formBilan.submit();
	if(mode == 'date'){
		document.getElementById("debut").removeAttribute('disabled');
		document.getElementById("fin").setAttribute('disabled','disabled');
	}
	if(mode == 'custom'){
		document.getElementById("debut").removeAttribute('disabled');
		document.getElementById("fin").removeAttribute('disabled');
	}
	if(mode == 'deb'){
		var type = document.getElementById("typeBilan").value;
		if( type == 'Bilan_par_date'){
			document.getElementById("debut").onchange = function() { document.formBilan.submit(); };
		}
	}
	if(mode == 'fn'){
		var type = document.getElementById("typeBilan").value;
		if( type == 'Bilan_customise'){
			document.getElementById("fin").onchange = function() { document.formBilan.submit(); };
		}
	}
	
	if(mode == 'effectif') document.formSynthese.submit();
	if(mode == 'paiement') document.formSynthese.submit();
	if(mode == 'il') document.formSynthese.submit();
	if(mode == 'droitP') document.formSynthese.submit();
	if(mode == 'droitI') document.formSynthese.submit();
	if(mode == 'school1') document.formListAff.submit();
	if(mode == 'choix_2') document.formListAff.submit();
	if(mode == 'school2') document.formServiceStr.submit();
	if(mode == 'choix_3') document.formServiceStr.submit();
	if(mode == 'school3') document.formRelance.submit();
	if(mode == 'relance'){
		var relance = document.getElementById("journal").value;
		if(relance == 'Journal_Soldes') document.formRelance.submit();
	}
	if(mode == 'debRelance'){
		var relance = document.getElementById("journal").value;
		var relance1 = document.getElementById("relance").value;
		if(relance != 'Journal_Soldes' && relance1 != '') document.formRelance.submit();
	}
	if(mode == 'jRelance'){
		document.formRelance.submit();
	}
	if(mode == 'statSynth'){
		var choisir1 = document.getElementById("choisir1").value;
		var choisir2 = document.getElementById("choisirPeriode").value;
		if(choisir1 != "" && choisir2 != ""){
			document.formSynthese.submit();
		}
	}
	if(mode == 'listMajor'){
		var choisir1 = document.getElementById("statmajor").value;
		var choisir2 = document.getElementById("stat1").value;
		var trim = document.getElementById("choisir2").value;
		if(choisir1 != "" && choisir2 != "" && trim != ""){
			document.formListMajor.submit();
		}
	}
	if(mode == 'choix_11') document.formListClas.submit();
	if(mode == 'schools1') document.formListClas.submit();
	if(mode == 'choix_P') document.formListParent.submit();
	if(mode == 'schoolP') document.formListParent.submit();
	if(mode == 'choix_Af') document.formListAffNaf.submit();
	if(mode == 'schoolAf') document.formListAffNaf.submit();
	if(mode == 'genres') document.formListGenre.submit();
	if(mode == 'genre') document.formListGenre.submit();
	if(mode == 'inscrit') document.formListInscrit.submit();
	if(mode == 'excel') document.formListExcel.submit();
	
}
function getChoix(mode){
	var choix = "";
	if(mode=='mode1') choix = document.getElementById("choix1_mode1").value;
	if(mode=='mode2') choix = document.getElementById("choix1_mode2").value;
	if(mode=='mode3') choix = document.getElementById("stat1").value;
	if(mode=='mode4') choix = document.getElementById("relances").value;
	if(mode=='mode5') choix = document.getElementById("genre").value;
	if(mode=='mode6') choix = document.getElementById("journalRs").value;
	if(mode=='mode7') choix = document.getElementById("il").value;
	if(mode=='mode8') choix = document.getElementById("tableauR").value;
	if(mode=='mode9') choix = document.getElementById("exl").value;
	if(mode=='mode10') choix = document.getElementById("choisir").value;
	if(mode=='mode11') choix = document.getElementById("blc1").value;
	if(choix != ""){
		$.ajax({
			type : 'post',
			url : 'ajax',
			dataType: 'json',
			data : {
				crud: choix
			}, success : function(result){
				var option = "<option value='' selected></option>";
				$.each(result, function(index, value){
					option += '<option value="'+value.choix1+'">'+value.choix2+'</option>';
					
				});
				if(mode=="mode1") document.getElementById("choix2_mode1").innerHTML = option;
				if(mode=="mode2") document.getElementById("choix2_mode2").innerHTML = option;
				if(mode=="mode3") document.getElementById("stat2").innerHTML = option;
				if(mode=="mode4") document.getElementById("relance").innerHTML = option;
				if(mode=="mode5") document.getElementById("genres").innerHTML = option;
				if(mode=="mode6") document.getElementById("journalR").innerHTML = option;
				if(mode=="mode7") document.getElementById("ils").innerHTML = option;
				if(mode=='mode8') document.getElementById("tableauRs").innerHTML = option;
				if(mode=='mode9') document.getElementById("exls").innerHTML = option;
				if(mode=='mode10') document.getElementById("choisis").innerHTML = option;
				if(mode=='mode11') document.getElementById("bclasse").innerHTML = option;
				
			}
		});
	}
}
function infoEleve(mode){
	$.ajax({
		type : 'post',
		url : 'ajax',
		dataType: 'json',
		data : {
			id: mode,
			crud: 'infoE'
		}, success : function(result){
			$.each(result, function(index, value){
				document.getElementById("mt").innerHTML = value.matricule;
				document.getElementById("np").innerHTML = value.nomPrenoms;
				document.getElementById("genre").innerHTML = value.genre;
				document.getElementById("national").innerHTML = value.nation;
				document.getElementById("stt").innerHTML = value.statut;
				document.getElementById("classe").innerHTML = value.clas;
				document.getElementById("red").innerHTML = value.reduction;
				document.getElementById("imgComp").innerHTML = value.image;
				document.getElementById("prise").innerHTML = value.prise;
				document.getElementById("rep").innerHTML = value.report;
				document.getElementById("il").innerHTML = value.il;
				document.getElementById("telp").innerHTML = value.contact;
				
			});
			if(document.getElementById("details").style.display!="block"){
				document.getElementById("pop").style.display="block";
				document.getElementById("paieSer").style.display="none";
				document.getElementById("details").style.display="block";
			}
		}
	});
}
function filtrer(){
	var filtre,tbody,ligne,cellule,cellule_0,i,texte_1,texte_2;
	filtre = document.getElementById("filtre").value.toUpperCase();
	tbody = document.getElementById("tbody");
	ligne = tbody.querySelectorAll('div');
	
	for(i = 0; i < ligne.length; i++){
		cellule_0 = ligne[i].getElementsByTagName("div")[0];
		cellule = ligne[i].getElementsByTagName("div")[1];
		if(cellule_0){
			texte_1 = cellule_0.innerText;
			texte_2 = cellule.innerText;
			if (texte_1.toUpperCase().indexOf(filtre) > -1){
				ligne[i].style.display = "";
			} else {
				if (texte_2.toUpperCase().indexOf(filtre) > -1){
					ligne[i].style.display = "";
				} else {
					ligne[i].style.display = "none";
				}
			}
		}
	}
}
$("input").focus(function(){document.getElementById("alert").innerHTML="";});