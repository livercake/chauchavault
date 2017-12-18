(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addresses'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <tr data-address=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">\n        <td>"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>0</td>\n        <td>\n            <button class=\"btn btn-success viewkey-btn\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"View Private Key",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n            <!-- <button class=\"btn btn-secondary signkey-btn\">Sign</button> -->\n            <button class=\"btn btn-secondary qr-btn\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"QR",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n        </td>\n        <td><button class=\"btn btn-danger deleteaddr-btn\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Delete",{"name":"i18n","hash":{},"data":data}))
    + "</button></td>\n    </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.addresses : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['transactions'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "    <tr>\n        <td>"
    + alias3((helpers.timeSince || (depth0 && depth0.timeSince) || alias2).call(alias1,(depth0 != null ? depth0.time_utc : depth0),{"name":"timeSince","hash":{},"data":data}))
    + " ago</td>\n        <td>"
    + alias3(alias4((depth0 != null ? depth0.amount : depth0), depth0))
    + " "
    + alias3(((helper = (helper = helpers.coin_symbol || (depth0 != null ? depth0.coin_symbol : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"coin_symbol","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(alias4((depth0 != null ? depth0.address : depth0), depth0))
    + "</td>\n        <td>"
    + alias3(alias4((depth0 != null ? depth0.confirmations : depth0), depth0))
    + "</td>\n        <td>\n            (<a href=\"http://explorer.chaucha.orionx.io/tx/"
    + alias3(alias4((depth0 != null ? depth0.tx : depth0), depth0))
    + "\" target=\"_blank\">Insight</a>)\n            <!-- (<a href=\"http://explorer.litecoin.net/tx/"
    + alias3(alias4((depth0 != null ? depth0.tx : depth0), depth0))
    + "\" target=\"_blank\">Chaucha Explorer</a>) -->\n        </td>\n    </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.transactions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['wallet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"logged_header main_header single\">\n    <h1>\n        <span class=\"pull-right ltc-balance hidden-xs\" id=\"ltc-balance\">0.0000 "
    + alias4(((helper = (helper = helpers.coin_symbol || (depth0 != null ? depth0.coin_symbol : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coin_symbol","hash":{},"data":data}) : helper)))
    + "</span>\n    </h1>\n\n    <div class=\"container\">\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li><a href=\"#home\" role=\"tab\" data-toggle=\"tab\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Home",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n            <li><a href=\"#tab_transactions\" role=\"tab\" data-toggle=\"tab\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Transactions",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n            <li><a href=\"#tab_send_coins\" role=\"tab\" data-toggle=\"tab\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Send",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n            <li class=\"active\"><a href=\"#tab_addresses\" role=\"tab\" data-toggle=\"tab\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Receive (manage addresses)",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n            <li><a href=\"#tab_import_export\" role=\"tab\" data-toggle=\"tab\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Import/Export",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n            <li><a href=\"#tab_settings\" role=\"tab\" data-toggle=\"tab\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Settings",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n        </ul>\n    </div>\n</div>\n<div class=\"container\">\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-xs-12\" id=\"alerts-section\">\n\n        </div>\n    </div>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n        <div class=\"tab-pane\" id=\"home\">...</div>\n        <div class=\"tab-pane\" id=\"tab_transactions\">\n            <h4>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Your Transactions",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n\n            <table id=\"list-transactions-outer\" class=\"table table-bordered\">\n                <thead>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Date",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Amount",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Your Address",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Confirmations",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"View",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                </thead>\n                <tbody id=\"list-transactions\">\n                    <tr><td colspan=\"5\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Error loading transactions?",{"name":"i18n","hash":{},"data":data}))
    + "</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"tab-pane active\" id=\"tab_addresses\">\n\n            <table id=\"list-addresses-outer\" class=\"table table-bordered\">\n                <thead>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Address",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Balance",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Options",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                <th>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Delete?",{"name":"i18n","hash":{},"data":data}))
    + "</th>\n                </thead>\n                <tbody id=\"list-addresses\">\n                    <tr><td colspan=\"4\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Error loading addresses?",{"name":"i18n","hash":{},"data":data}))
    + "</td></tr>\n                </tbody>\n            </table>\n\n            <button id=\"generate-btn\" class=\"btn btn-default\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Generate New Address",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n        </div>\n        <div class=\"tab-pane\" id=\"tab_send_coins\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"alert alert-danger\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Note: You will get an error if you try to send multiple transactions in a short period of time. This is because you cannot send unconfirmed coins yet.",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n\n\n                    <!-- <h4>Exchange Rates</h4>\n                    <ul id=\"exchange-rates\">\n                        <li>Under Construction</li>\n                    </ul> -->\n                </div>\n\n                <div class=\"col-md-6\">\n                    <h4>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Send",{"name":"i18n","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.coin_symbol || (depth0 != null ? depth0.coin_symbol : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coin_symbol","hash":{},"data":data}) : helper)))
    + "</h4>\n                    <div class=\"input-group-lg\">\n                        <label for=\"from-address\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"From Address",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                        <select name=\"my-addresses\" id=\"select-my-addresses\" class=\"form-control\"></select>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"input-group form-inline\">\n                                <label for=\"to-address\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Recipient Address",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                                <input type=\"text\" class=\"form-control\" id=\"to-address\"/>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"input-group form-inline\">\n                                <label for=\"to-address\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Amount to send",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                                <input type=\"text\" class=\"form-control\" id=\"send-coins-amount\" placeholder=\"0.0000\"/>\n                            </div>\n                        </div>\n                    </div>\n\n                    <hr/>\n                    <button class=\"btn btn-default\" id=\"send-coins-btn\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Send Coins",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                    &nbsp;\n                </div>\n\n                <!-- <div class=\"col-md-6\">\n                  <div class=\"well\">\n                      This service is not ran as a business and relies on the community to keep it alive. If you use the service, please\n                      donate, even just $1 in Litecoins contribute towards development time, and server costs.<br/>\n                      <br/>\n                      Donate to Litevault to keep us running: <br/><br/>\n                      <div class=\"panel panel-default\">\n                          <div class=\"panel-heading\">\n                              <h4 class=\"panel-title\">Litecoin</h4>\n                          </div>\n                          <div class=\"panel-body\">\n                              LNWEjx3DKSAWKX5fkWfCwa2tWSQeo7ZmnR\n                          </div>\n                      </div>\n                      <div class=\"panel panel-default\">\n                          <div class=\"panel-heading\">\n                              <h4 class=\"panel-title\">Bitcoin</h4>\n                          </div>\n                          <div class=\"panel-body\">\n                              17PPTHmS8N34KYKdDc4Gn1psabteGS8EE3\n                          </div>\n                      </div>\n                  </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"tab-pane\" id=\"tab_import_export\">\n            <div class=\"row\">\n                <div class=\"col-md-6 form-inline\">\n                    <h4>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Import",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                    <div class=\"input-group\">\n                        <p class=\"form-control-static\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Import Key (WIF)",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"import-address\" />\n                    </div>\n                    <button class=\"btn btn-default\" id=\"import-btn\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Import",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n                <div class=\"col-md-9\">\n                    <h4>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Export",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                    <a href=\"javascript:void(0);\" id=\"export-wallet-json-link\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Export Wallet (JSON)",{"name":"i18n","hash":{},"data":data}))
    + "</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane\" id=\"tab_settings\">\n            <h3>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Security",{"name":"i18n","hash":{},"data":data}))
    + "</h3>\n            <div class=\"row\">\n                <div class=\"col-md-6 form-inline\">\n                    <label for=\"account-email\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Your Email (optional)",{"name":"i18n","hash":{},"data":data}))
    + ": </label>\n                    <input type=\"text\" id=\"account-email\" class=\"form-control\"/>\n                    <button class=\"btn btn-default\" id=\"save-email\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Save Email",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n            <hr/>\n            <h4>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"2-Factor Authentication",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-6\">\n                    <strong>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"2-Factor Authentication Status",{"name":"i18n","hash":{},"data":data}))
    + ": <strong id=\"2fa-status\" style=\"color:red\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Disabled",{"name":"i18n","hash":{},"data":data}))
    + "</strong></strong>\n                    <button class=\"btn btn-default\" id=\"configure-gauth\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Enable/Modify 2-Factor Authentication",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n\n                </div>\n                <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"well\">\n                    <p>NOTE: This is a beta feature. Please make sure you backup your wallet often when using 2-Factor authentication.\n                            If you find any bugs with 2-Factor authentication, please report them to\n                            <a href=\"mailto:info+security@someguy123.com\">info+security@someguy123.com</a> </p>\n                        <p>If you have 2-Factor authentication enabled, the button \"Enable/Modify\" will also allow you to replace it\n                            with a new 2-Factor token, for example if you reset or get a new phone.</p>\n                        <p>If you would like to disable 2-Factor authentication, please contact support</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"deleteAddressModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Deleting Address",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <h3>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Warning: You're deleting an address!",{"name":"i18n","hash":{},"data":data}))
    + "</h3>\n                    <h4 style=\"color:#ff0000\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"This action is irreversible, please make sure you're absolutely sure you want to do this, the private key will be removed from your account and you will lose access to any funds stored in this address unless you have a backup of the private key somewhere.",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"The address you are deleting is",{"name":"i18n","hash":{},"data":data}))
    + " <strong id=\"deletingAddress\"></strong></p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" id=\"i-am-sure-delete\" class=\"btn btn-danger\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"I'm sure I want to delete this address",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"exportWalletModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exportWalletModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"exportWalletModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Exporting Wallet",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <textarea id=\"wallet-exported-txt\" class=\"form-control\" cols=\"20\" rows=\"30\" style=\"height: 300px;\"></textarea>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Done",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"configGauthModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"configGauthModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"configGauthModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Setting up Google Authenticator (or other TOTP app)",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p style=\"color: red\"><strong>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"IMPORTANT, READ BEFORE CONTINUING:",{"name":"i18n","hash":{},"data":data}))
    + " </strong>\n                    "
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Please make sure that you have an email set in your account settings.",{"name":"i18n","hash":{},"data":data}))
    + "\n                    "
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"If you don't have one and you lose access to your 2FA app for any reason, you won't be able to get back into your account.",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n                    <div class=\"qrcode_container text-center\" id=\"modal-gauth-qr\">\n\n                    </div>\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Manual key entry:",{"name":"i18n","hash":{},"data":data}))
    + " <strong id=\"modal-gauth-secret\"></strong></p>\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"To enable 2 Factor Authentication, scan the QR code above into your favourite authenticator app such as",{"name":"i18n","hash":{},"data":data}))
    + "\n                    <strong>Google Authenticator</strong> "
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"or",{"name":"i18n","hash":{},"data":data}))
    + " <strong>Authy</strong>.\n                    "
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Once done, enter the access token you get from the app into the text box below, it looks like",{"name":"i18n","hash":{},"data":data}))
    + " <strong>123456</strong>.</p>\n                    <label for=\"modal-gauth-token\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Your 2FA token from the app:",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <input type=\"text\" class=\"form-control\" id=\"modal-gauth-token\" placeholder=\"e.g. 123456\"/>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" id=\"confirm-setup-2fa\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Set Up 2FA",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"completeGauthModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"completeGauthModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"completeGauthModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"You have successfully enabled 2FA for your account.",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"You've just enabled 2FA for your account.",{"name":"i18n","hash":{},"data":data}))
    + " </p>\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Please be aware that from now on you will be required to enter a token from your 2FA application approximately once a week for security, where-as untrusted computers will be de-authorized within 2 hours.",{"name":"i18n","hash":{},"data":data}))
    + " </p>\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"If you decide that you don't want 2FA, or run into a problem with the application, you will be able to disable it from this computer using your password for the next week, without being required to enter a 2FA token.",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Okay",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"txModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"txModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"txModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Transaction Sent",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    "
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Transaction ID",{"name":"i18n","hash":{},"data":data}))
    + ": <p id=\"txModalTXID\">ERROR</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Close",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"privkeyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"privkeyModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\""
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Close",{"name":"i18n","hash":{},"data":data}))
    + "\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"privkeyModalLabel\">Your Private Key</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <input type=\"text\" disabled=\"disabled\" value=\"\" class=\"form-control\" id=\"privkey-showtext\"/>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Close",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"signMessageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"signMessageModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"signMessageModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Sign Message",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Address",{"name":"i18n","hash":{},"data":data}))
    + ": <strong id=\"signmessage-address\"></strong></p>\n                    <label for=\"sign-message\"></label>\n                    <textarea id=\"sign-message\" class=\"form-control\" cols=\"30\" rows=\"5\"></textarea><br/>\n                    <label for=\"signed-message\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Signed Message",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <textarea id=\"signed-message\" class=\"form-control\" cols=\"30\" rows=\"5\" disabled=\"disabled\"></textarea><br/>\n                    <button class=\"btn btn-success\" id=\"sign-message-btn\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Sign Message",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Close",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"qrcodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"qrcodeModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"qrcodeModalLabel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"QR Code",{"name":"i18n","hash":{},"data":data}))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <img src=\"\" id=\"qrcode-img\" alt=\"\" width=\"200\" height=\"200\"/><br/>\n                        <strong id=\"qrcode-address\"></strong>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"Cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";
},"useData":true});
})();