var I18n = function(options){
    for (var prop in options) {
        this[prop] = options[prop];
    };

    this.setLocale(this.locale);
};

I18n.localeCache = {};

I18n.prototype = {
    defaultLocale: "en",
    directory: "/locales",
    extension: ".min.json",

    getLocale: function(){
        return this.locale;
    },

    setLocale: function(locale){
        if(!locale)
            locale = $("html").attr("lang");

        if(!locale)
            locale = this.defaultLocale;

        this.locale = locale;

        if(locale in I18n.localeCache) return;
        else this.getLocaleFileFromServer();
    },

    getLocaleFileFromServer: function(){
        localeFile = null;
        _this = this
        $.ajax({
            url: this.directory + "/" + this.locale + this.extension,
            dataType: 'json',
            success: function(data){
                I18n.localeCache[_this.locale] = data;
            }
        });
    },

    __: function(){
        var msg = I18n.localeCache[this.locale][arguments[0]];

        if (arguments.length > 1){
            msg = vsprintf(msg, Array.prototype.slice.call(arguments, 1));
        }else{
          // if(!window.nada) window.nada = {};
          // if(!window.nada[arguments[0]]) $("#nada").html($("#nada").html()+"\n\""+arguments[0]+"\":\""+arguments[0]+"\",");
          // window.nada[arguments[0]] = true;


        }
        return msg;
    },

    __n: function(singular, count){
        var msg = I18n.localeCache[this.locale][singular];

        count = parseInt(count, 10);
        if(count === 0)
            msg = msg.zero;
        else
            msg = count > 1 ? msg.other : msg.one;

        msg = vsprintf(msg, [count]);

        if (arguments.length > 2)
            msg = vsprintf(msg, Array.prototype.slice.call(arguments, 2));

        return msg;
    }
};
