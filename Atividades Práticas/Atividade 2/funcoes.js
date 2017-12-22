$(document).ready(function(){

	$("button[name='calcularMagnitude']").click(function(){

		var amplitude = parseFloat($("input[name='valorAmp']").val());
		var deltat = parseFloat($("input[name='valorT'").val());

		if(isNaN(amplitude)){
			$("#grupoAmp").addClass("has-error");
			$("#alertaAmp").slideDown();
			$("input[name='valorAmp']").val("");
			$("input[name='valorAmp']").focus();
			return;
		}

		$("#grupoAmp").removeClass("has-error");
		$("#alertaAmp").hide();

		if(isNaN(deltat)){
			$("#grupoT").addClass("has-error");
			$("#alertaT").slideDown();
			$("input[name='valorT']").val("");
			$("input[name='valorT']").focus();
			return;
		}

		$("#grupoT").removeClass("has-error");
		$("#alertaT").hide();

		var magnitude = Math.log10(amplitude) + 3 * Math.log10(8*deltat) - 2.92;
		$("input[name='valorMag']").val(magnitude);

		if(magnitude < 3.5){
			$("#alertaMag1").slideDown();

			$("#alertaMag2").hide();
			$("#alertaMag3").hide();
			$("#alertaMag4").hide();
			$("#alertaMag5").hide();
			$("#alertaMag6").hide();
		}
		else if(magnitude > 3.5 && magnitude < 5.4){
			$("#alertaMag2").slideDown();

			$("#alertaMag1").hide();
			$("#alertaMag3").hide();
			$("#alertaMag4").hide();
			$("#alertaMag5").hide();
			$("#alertaMag6").hide();
		}
		else if(magnitude > 5.5 && magnitude < 6){
			$("#alertaMag3").slideDown();

			$("#alertaMag2").hide();
			$("#alertaMag1").hide();
			$("#alertaMag4").hide();
			$("#alertaMag5").hide();
			$("#alertaMag6").hide();
		}
		else if(magnitude > 6.1 && magnitude < 6.9){
			$("#alertaMag4").slideDown();

			$("#alertaMag2").hide();
			$("#alertaMag3").hide();
			$("#alertaMag1").hide();
			$("#alertaMag5").hide();
			$("#alertaMag6").hide();
		}
		else if(magnitude > 7 && magnitude < 7.9){
			$("#alertaMag5").slideDown();

			$("#alertaMag2").hide();
			$("#alertaMag3").hide();
			$("#alertaMag4").hide();
			$("#alertaMag1").hide();
			$("#alertaMag6").hide();
		}
		else if(magnitude > 8){
			$("#alertaMag6").slideDown();

			$("#alertaMag2").hide();
			$("#alertaMag3").hide();
			$("#alertaMag4").hide();
			$("#alertaMag5").hide();
			$("#alertaMag1").hide();
		}
	});
});