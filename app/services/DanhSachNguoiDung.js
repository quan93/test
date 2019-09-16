function DanhSachNguoiDung() {
  /* Lây danh sách nguời dùng */
  this.layDanhSachNguoiDung = function() {
    return $.ajax({
      url: "http://5d78df60a8c27100149866c8.mockapi.io/api/NguoiDung",
      type: "GET"
    });
  };

  /* Thêm người dùng */
  this.themNguoiDung = function(nguoiDung) {
    return $.ajax({
      url: "http://5d78df60a8c27100149866c8.mockapi.io/api/NguoiDung",
      type: "POST",
      data: nguoiDung
    });
  };
}

/* Xoa nguoi dung */
DanhSachNguoiDung.prototype.xoaNguoiDung = function(id) {
  return $.ajax({
    url: `http://5d78df60a8c27100149866c8.mockapi.io/api/NguoiDung/${id}`,
    type: "DELETE"
  });
};

/* lấy thông tin người dùng */
DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id) {
  return $.ajax({
    url: `http://5d78df60a8c27100149866c8.mockapi.io/api/NguoiDung/${id}`,
    type: "GET"
  });
};

// cập nhật người dùng
DanhSachNguoiDung.prototype.capNhatNguoiDung = function(id, nguoiDung){
  return $.ajax({
    url: `http://5d78df60a8c27100149866c8.mockapi.io/api/NguoiDung/${id}`,
    type: "PUT",
    data: nguoiDung,
  });
}