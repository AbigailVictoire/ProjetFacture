<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" charset="UTF-8" content="width=device-width, initial-scale=1.0" />
<title>PATRIMOINES</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/bootstrap.min.css" />" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/headers.css" />" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/styliste.css" />" />
	<link rel="stylesheet" href="assets/fontes/font-awesome.min.css">
	 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <c:import url="/inc/headers2.jsp"></c:import>
    
     <div class="container-fluid" style="">
			<div class="row">
				<div class="col-md-5">
					<form class="formSearch">
						<div class="form-group d-flex" style="display: ;">
							<button class="btn btn-light" onclick="return false;">
								RECHERCHE
							</button>
							<input class="form-control squared-border-right" type="search" placeholder="Rechercher..." id="filtre" onkeyup="filtrer();" required name="keyword">
						</div>
					</form>
				</div>
				
					<div class="hd" style="text-align: center;">
						<h5> PATRIMOINES </h5>
					</div>
			</div>
			 <div class="row">
			<div class="container" style="margin-left: 0;">
						<div class="table" id="table1">
							<div class="thead">
								<div class="tr">
									<div class="td" style="">N° PATRIMOINES</div>
									<div class="td" style="">NOM PATRIMOINES</div>
									<div class="td" style="">DESCRIPTION</div>
									
								</div>
							</div>
							<div class="tbody" id="tbody">
								<c:forEach items="${listPatrim.rows}" var="mapAd" varStatus="boucle">
									<div class="tr ${boucle.index % 2 == 0 ? 'pair' : 'impair'}">
										<div class="td" style="text-align:center;">${boucle.index + 1}</div>
										<div class="td">${mapPatrim.nom_patrimoine} </div>
										<div class="td" style="text-align:center;">${mapPatrim.description}</div>
						
						                <div class="td">
						                	 <button  class="custom-button" style="margin-left: 25px; border: 1px  #ccc; background-color: skyblue; padding: 8px;"><i class="fa fa-pencil fa-lg"></i></button>
						                
							                 <button class="custom-button" style="margin-left: 25px; border: 1px  #ccc; background-color: skyblue; padding: 8px;" >
											    <i class="fa fa-trash-o fa-lg"></i>
											</button>
	
							                  <button style="margin-left: 25px; border: 1px  #ccc; background-color: skyblue; padding: 8px;" class="" ><i class="fa fa-plus-circle fa-lg"></i></button>
						                  </div>
									</div>
								</c:forEach>
							</div>
						</div>
			</div>
		</div>
	</div>
	 
	<script src="<c:url value="/assets/js/jquery.min.js" />" type="text/javascript"></script>
	<script src="<c:url value="/assets/js/bootstrap.min.js" />" type="text/javascript"></script>
	<script src="<c:url value="/assets/js/newVersion.js" />" type="text/javascript"></script>
</body>
</html>
