
// código copiado de https://bitbucket.org/carlosasj/contacts_front/src/4d927154d9294f5f18bd2b2e8d6f9279ea4c3e27/js/default-smartcrop.js?at=master&fileviewer=file-view-default
function defaultcrop() {

    $('.tocrop').each(function(){
        $(this).load(function(){
            var img = this;

            var $data = $(this).data();

            var destiny = $data.destiny || ".receivecrop";

            var options = $data.options;
            if (!options) {
                var dest_w;
                var dest_h;
                var ratio = $data.ratio;
                if (ratio){
                    var src_w = img.width;
                    var src_h = img.height;

                    if (src_h*ratio <= src_w){
                        dest_h = src_h;
                        dest_w = src_h*ratio;
                    } else {
                        dest_h = src_w/ratio;
                        dest_w = src_w;
                    }
                } else {
                    dest_w = $(destiny)[0].width;
                    dest_h = $(destiny)[0].height;
                }
                options = {"width": dest_w, "height": dest_h, "minScale": 0.8};
            }

            SmartCrop.crop(img, options, function(result){
                var crop = result.topCrop;
                var canvas = $(destiny)[0];
                var ctx = canvas.getContext('2d');

                canvas.width = options.width;
                canvas.height = options.height;
                ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
            });
        });

    });
};