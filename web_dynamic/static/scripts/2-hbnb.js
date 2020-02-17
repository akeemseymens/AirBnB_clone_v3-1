$(document).ready(function () {
  const amenityList = {};
  $('INPUT:checkbox').change(function () {
    if ($(this).is(':checked')) {
      const key = $(this).attr('data-id');
      const value = $(this).attr('data-name');
      amenityList[key] = value;
    }
    if (!$(this).is(':checked')) {
      delete amenityList[$(this).attr('data-id')];
    }
  });
});
