$(document).ready(function() {
  var danhSachNguoiDung = new DanhSachNguoiDung();

  function themNguoiDung(){
    console.log("themNguoiDung");
  }

  getListUser();

  function getListUser() {
    danhSachNguoiDung
      .layDanhSachNguoiDung()
      .done(function(result) {
        taoBang(result);
      })
      .fail(function(error) {
        console.log(error);
      });
  }

  $("#btnThemNguoiDung").click(function() {
    $(".modal-title").html("Thêm người dùng");

    var footer = `
        <button id="btnThem" class="btn btn-success">Thêm</button>
    `;

    $(".modal-footer").html(footer);
  });

  /* Chức năng thêm */
  $("body").delegate("#btnThem", "click", function() {
    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();
    var maLoaiNguoiDung = $("#loaiNguoiDung").val();

    var nguoiDung = new NguoiDung(
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDT,
      maLoaiNguoiDung
    );

    danhSachNguoiDung
      .themNguoiDung(nguoiDung)
      .done(function(result) {
        getListUser();
      })
      .fail(function(err) {
        console.log(err);
      });
  });

  /* Chức năng xóa  */
  $("body").delegate(".btnXoa", "click", function() {
    var id = $(this).data("id");

    danhSachNguoiDung
      .xoaNguoiDung(id)
      .done(function(result) {
        getListUser();
      })
      .fail(function(err) {
        console.log(err);
      });
  });

  /* Lấy thông tin người dùng */
  $("body").delegate(".btnSua", "click", function() {
    $(".modal-title").html("Sửa người dùng");

    var footer = `    
        <button id="btnCapNhat" class="btn btn-success">Cập nhật</button>
      `;

    $(".modal-footer").html(footer);

    var id = $(this).data("id");
    danhSachNguoiDung
      .layThongTinNguoiDung(id)
      .done(function(result) {
        $("#TaiKhoan").val(result.taiKhoan);
        $("#HoTen").val(result.hoTen);
        $("#MatKhau").val(result.matKhau);
        $("#Email").val(result.email);
        $("#SoDienThoai").val(result.soDT);
        $("#loaiNguoiDung").val(result.maLoaiNguoiDung);
        
      })
      .fail(function(err) {
        console.log(err);
      });
  });

    // cập nhật
    $("body").delegate("#btnCapNhat", "click", function(){
      var id = $(this).data("id");
      var taiKhoan = $(this).data("#TaiKhoan").val();
      var hoTen = $(this).data("#HoTen").val();
      var matKhau = $(this).data("#MatKhau").val();
      var soDT = $(this).data("#soDienThoai").val();
      var maLoaiNguoiDung = $(this).data("#loaiNguoiDung").val();
      
      var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau,email,soDT,maLoaiNguoiDung);
    
      danhSachNguoiDung.capNhatNguoiDung(id, nguoiDung)
    .done(function(result){
      console.log(result);
      getListUser();
    })
    .fail(function(err){});
    
    
    });
    
 
  function taoBang(mang) {
    var content = "";
    mang.map(function(item, index) {
      content += `
              <tr>
                  <td>${index + 1}</td>
                  <td>${item.taiKhoan}</td>
                  <td>${item.matKhau}</td>
                  <td>${item.hoTen}</td>
                  <td>${item.email}</td>
                  <td>${item.soDT}</td>
                  <td>${item.maLoaiNguoiDung}</td>
                  <td>
                      <button class="btnSua btn btn-info" data-toggle="modal" data-target="#myModal" data-id="${
                        item.id
                      }">Sửa</button>
                      <button class="btnXoa btn btn-danger" data-id="${
                        item.id
                      }">Xóa</button>
                  </td>
              </tr>
          `;
    });
    $("#tblDanhSachNguoiDung").html(content);
  }
});
