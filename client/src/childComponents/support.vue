<template>
<div>
	<!-- 오시는 길 -->
	<!-- 구글맵 연동 해서 오시는 길 표시 --> 
	<section id="getApp" style="background: #ffffff; padding: 10px 0px 60px;">
		<div class="section-heading scrollpoint sp-effect3">
			<h1><Strong>Location</Strong></h1>
			<p>쿠핏은 이곳에 위치해 있습니다.</p>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12" style="padding: 0px;">
					<div id="gMap" style="min-height: 350px; border: 1px solid #C6C6C6;" class="mt30 mb30"></div>
				</div>
			</div>
		</div>
	</section>


	<!-- Support -->
	<section id="support" class="doublediagonal">

		<div class="container">
			<div class="section-heading scrollpoint sp-effect3">
				<h1 style="font-size: 80px;"><Strong>Support</Strong></h1>
				<p>궁금한 사항이나 더 많은 정보를 원하신다면 연락해 주세요.</p>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-8 col-sm-8 scrollpoint sp-effect1">
							<div class="form-group">
								<input type="text" id="userName" name="userName" class="form-control" placeholder="Your name">
							</div>
							<div class="form-group">
								<input type="email" id="userEmail" name="userEmail" class="form-control" placeholder="Your email">
							</div>
							<div class="form-group">
								<textarea cols="30" rows="10" id="content" name="content" class="form-control" placeholder="Your message"></textarea>
							</div>
							<button class="btn btn-primary btn-lgn btnSend">Submit</button>
						</div>
						<div class="col-md-4 col-sm-4 contact-details scrollpoint sp-effect2">
							<div class="media">
								<span class="pull-left">
									<i class="fa fa-map-marker fa-2x"></i>
								</span>
								<div class="media-body">
									<h5 class="media-heading">#313 Seongsu IT center, 37, Seongsui-ro 22-gil,</h5>
									<h5 class="media-heading">Seongdong-gu, Seoul, Korea</h5>
								</div>
							</div>
							<div class="media">
								<span class="pull-left">
									<i class="fa fa-envelope fa-2x"></i>
								</span>
								<div class="media-body">
									<h4 class="media-heading">
										<a href="mailto:help@cufit.net">help@cufit.net</a>
									</h4>
								</div>
							</div>
							<div class="media">
								<span class="pull-left">
									<i class="fa fa-phone fa-2x"></i>
								</span>
								<div class="media-body">
									<h4 class="media-heading">+82 2 6462 9816</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
</template>

<script>
export default {

}

</script>
