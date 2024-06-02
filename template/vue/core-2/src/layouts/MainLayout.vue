<template>
  <div id="my-page" class="page-style-2">
    <header class="kt-header kt-header--home has-bg-slider-type2">
      <div class="menu-thi">
        <div class="container container--large">
          <div class="row justify-content-between">
            <div class="col-12 col-md-auto">
              <div class="row">
                <div class="col-12 col-md-auto">
                  <a href="" class="kt-header__logo h-100-percent">
                    <img src="@/assets/images/logo.png" alt="" />
                  </a>
                </div>
                <div class="col">
                  <nav class="kt-header__nav" id="my-menu">
                    <ul>
                      <li>
                        <a href=""
                          >Việc làm <i class="fa fa-chevron-down"></i
                        ></a>
                        <ul>
                          <li><a href="">Việc làm mới nhất</a></li>
                          <li><a href="">Tìm việc làm</a></li>
                          <li><a href="">Quản lý việc làm của tôi</a></li>
                        </ul>
                      </li>
                      <li><a href="">Công ty</a></li>
                      <li>
                        <a href=""
                          >Đào tạo <i class="fa fa-chevron-down"></i
                        ></a>
                        <ul>
                          <li><a href="">Nộp hồ sơ cấp chứng chỉ</a></li>
                          <li><a href="">Luyện thi chứng chỉ</a></li>
                          <li><a href="">Thi thử chứng chỉ</a></li>
                          <li><a href="">Sát hạch chứng chỉ</a></li>
                          <li><a href="">Hướng dẫn</a></li>
                          <li><a href="">Tra cứu tài liệu</a></li>
                        </ul>
                      </li>
                      <li><a href="">Thư viện</a></li>
                      <li><a href="">Blog</a></li>
                      <li><a href="">Liên hệ</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div class="col-md-auto justify-content-center kt-header__right">
              <div class="kt-header__account pt-2 dropdown">
                <a href="#" class="kt-header__account-toggle">
                  Nhà Tuyển Dụng
                </a>
                <a
                  href="#"
                  class="kt-header__account-toggle"
                  data-toggle="dropdown"
                >
                  <i class="bg-icon_notifications inline-middle ml-2"></i>
                </a>
                <a
                  href="#"
                  class="kt-header__account-toggle"
                  data-toggle="dropdown"
                >
                  <img
                    src="@/assets/images/flag-eng.png"
                    alt=""
                    class="inline-middle ml-2"
                  />
                </a>
                <a
                  href="#"
                  class="kt-header__account-toggle"
                  data-toggle="dropdown"
                >
                  <i class="bg-profile_circle inline-middle ml-2"></i> Thanh
                  <i class="fa fa-chevron-down"></i>
                </a>

                <div class="dropdown-menu mt-4 dropdown-menu-right">
                  <p>Ứng viên đăng nhập</p>
                  <form action="">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control login-email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div class="form-group">
                      <div class="row gutter-10">
                        <div class="col-12 col-md-8">
                          <input
                            type="text"
                            class="form-control login-password"
                            placeholder="Your Password"
                          />
                        </div>
                        <div class="col-12 col-md-4">
                          <button type="submit" class="btn btn-login">
                            Đăng nhập
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p>Đăng nhập bằng</p>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <a class="btn btn-login-fb" href=""
                        ><i class="fab fa-facebook-f"></i> | Facebook</a
                      >
                    </div>
                    <div class="col-12 col-md-6">
                      <a href="" class="btn btn-login-google"
                        ><i class="fab fa-google"></i> | Google</a
                      >
                    </div>
                  </div>
                  <nav class="nav-login mt-4">
                    <a href="">Đăng ký</a><a href="">Quên mật khẩu?</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#my-menu"
          class="kt-menu-toggle d-block d-xl-none"
          id="menu-toggle"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <div class="banner-full">
        <div class="">
          <div class="row">
            <div id="main-slider" class="col-12">
              <div class="item">
                <a href=""
                  ><img
                    src="@/assets/images/slider4.jpg"
                    alt=""
                    class="d-block mx-auto"
                /></a>
              </div>
              <div class="item">
                <a href=""
                  ><img
                    src="@/assets/images/slider2.jpg"
                    alt=""
                    class="d-block mx-auto"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="main home-test home-thi">
      <router-view></router-view>
    </main>
    <footer class="kt-footer">
      <div class="container">
        <div class="kt-footer-upper">
          <div class="row">
            <div class="col-12 col-lg-4 col-xl-3">
              <a href="" class="kt-footer-upper__heading">
                VMC Work
                <span
                  class="kt-footer-upper__collapse-btn js-footer-panel-btn d-lg-none"
                >
                  <i class="fa fa-chevron-down"></i>
                </span>
              </a>
              <ul class="kt-footer-upper__list">
                <li><a href="">Quy định đăng tin</a></li>
                <li><a href="">Quy chế hoạt động</a></li>
                <li><a href="">Điều khoản thỏa thuận</a></li>
                <li><a href="">Chính sách bảo mật</a></li>
                <li><a href="">Giải quyết khiếu nại</a></li>
              </ul>
            </div>

            <div class="col-12 col-lg-4 col-xl-3">
              <a href="" class="kt-footer-upper__heading">
                Nhà Tuyển Dụng
                <span
                  class="kt-footer-upper__collapse-btn js-footer-panel-btn d-lg-none"
                >
                  <i class="fa fa-chevron-down"></i>
                </span>
              </a>

              <ul class="kt-footer-upper__list">
                <li><a href="">Quy định đăng tin</a></li>
                <li><a href="">Quy chế hoạt động</a></li>
                <li><a href="">Điều khoản thỏa thuận</a></li>
                <li><a href="">Chính sách bảo mật</a></li>
                <li><a href="">Giải quyết khiếu nại</a></li>
              </ul>
            </div>

            <div class="col-12 col-lg-4 col-xl-3">
              <a href="" class="kt-footer-upper__heading">
                Việc làm ngành nghề
                <span
                  class="kt-footer-upper__collapse-btn js-footer-panel-btn d-lg-none"
                >
                  <i class="fa fa-chevron-down"></i>
                </span>
              </a>

              <ul class="kt-footer-upper__list">
                <li><a href="">Quy định đăng tin</a></li>
                <li><a href="">Quy chế hoạt động</a></li>
                <li><a href="">Điều khoản thỏa thuận</a></li>
                <li><a href="">Chính sách bảo mật</a></li>
                <li><a href="">Giải quyết khiếu nại</a></li>
              </ul>
            </div>

            <div class="col-12 col-lg-4 col-xl-3">
              <a href="" class="kt-footer-upper__heading">
                Mạng truyền thông
                <span
                  class="kt-footer-upper__collapse-btn js-footer-panel-btn d-lg-none"
                >
                  <i class="fa fa-chevron-down"></i>
                </span>
              </a>

              <ul class="kt-footer-upper__socials">
                <li>
                  <a href=""><i class="fab fa-tiktok"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-facebook"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <small class="kt-footer-copyright d-block">
        <div class="container text-center">
          <div class="row">
            <div class="col-12">Copyright @2023 VMC works.</div>
          </div>
        </div>
      </small>

      <!-- Desktop contact-->
      <div class="kt-footer-contact">
        <div class="kt-footer-contact__wrapper">
          <div class="kt-footer-contact__box js-contact-box">
            <div class="kt-footer-contact__item">
              <i class="bg-message"></i>
            </div>
          </div>

          <div class="kt-footer-contact__toggle js-to-top">
            <i class="fa fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>
