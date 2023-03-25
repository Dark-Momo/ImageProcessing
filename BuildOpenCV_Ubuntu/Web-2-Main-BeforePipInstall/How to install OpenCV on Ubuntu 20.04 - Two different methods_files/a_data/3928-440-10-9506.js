
      (function(){
        olark.extend('GoogleAnalytics');
olark.extend('CalloutBubble');
olark.extend('Feedback');
olark.extend('Sounds');


        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"system":{"panel_offset":20,"send_transcript_cancel_text":"No Thanks","offline_survey":{"pages":[[{"is_required":true,"type":"name"},{"is_required":true,"type":"email"},{"label":"Message","is_required":true,"type":"textarea","placeholder_text":""}]]},"habla_offline_email_text":"click here and type your Email","disable_expand_text_input":false,"require_phone":0,"online_button_text":"Chat with us","restart_chat_offline_button_text":"Leave a message","input_height":20,"habla_offline_sent_text":"Thanks for your message! We'll get back to you shortly.","feedback_survey_question_operator_speed_low":"Not at all responsive","feedback_survey_question_operator_attitude_low":"Not at all friendly","prechat_survey_website_placeholder":"Enter your website...","branding_link_text":"Powered by Olark","hide_not_available":0,"habla_offline_phone_text":"click here and type your Phone Number","habla_offline_body_text":"We're not around but we still want to hear from you! Leave us a note:","url_handler_target_window":"_top","online_header_text":"Now chatting","start_expanded":0,"prechat_required_error_message":"Please complete all required fields","append_to_body":1,"parse_links":1,"prechat_email_validation_message":"Please enter a valid email address","feedback_survey_question_operator_attitude_high":"Extremely friendly","habla_name_input_text":"click here and type your Name","feedback_survey_question_1_text":"Question 1 of 5","allow_change_height":true,"enable_google_analytics":false,"disableGoogleAnalytics":0,"feedback_survey_begin_button_text":"Rate Chat","url_handler":"https://static.olark.com/jsclient-latest/follow.html?v=1426711435610","inline_css_url":"static.olark.com/css/3/9/3971c742ac2346c431f086113e61d518.css","enableLanguageTranslation":false,"send_text":"Send","feedback_survey_question_operator_speed_high":"Extremely responsive","disable_offline_messaging_fallback":true,"offline_header_text":"Leave A Message","enable_buttons":1,"file_type_error_text":"This file type is not allowed.","hb_disable_mobile":false,"poll":false,"send_transcript_error_text":"Please enter a valid email address","hb_custom_style":{"general":{"secondaryColor":"#3c78d3","corners":"soft"}},"welcome_msg":"Questions? We'd love to chat.","resize_input_height":60,"show_popout":0,"prechat_survey_name_label":"Name","habla_closebutton_text":"x","language":"en","feedback_survey_question_4_text":"Question 4 of 5","prechat_survey_email_label":"Email","prechat_survey_phone_label":"Phone","prechat_survey_phone_placeholder":"Enter your phone number...","disable_width":true,"prechat_survey_welcome_message":"Hi! Let\u2019s get some quick info so we can better serve you:","upload_rejected_error_text":"File uploading is currently unavailable.","habla_offline_submit_value":"Send","allow_change_width":true,"start_visible":false,"offline_survey_website_label":"Website","offline_survey_welcome_message":"We're not around but we still want to hear from you! Leave us a note:","divid":"habla_window_div","top_margin":0,"busy_message":"All of our representatives are with other customers at this time. We will be with you shortly.","offline_survey_thank_you_message":"Thanks for your message! We will have a member of our team contact you shortly.","hb_enable_uploads":false,"rtl":false,"hb_show_as_tab":false,"start_habla_window_visible":false,"offline_survey_email_placeholder":"Enter your email...","say_text":"Type here and hit enter to chat","not_available_text":"Contact us!","feedback_survey_button_finish":"Finish","send_transcript_title_text":"Send Transcript","offline_required_error_message":"Please complete all required fields","prechat_survey_next_button_text":"Next","right_margin":20,"cookie_path":"/","feedback_survey_question_2_text":"Question 2 of 5","pre_chat_submit":"Click here to start chatting","prechat_survey":{"is_enabled":true,"pages":[[{"is_required":true,"type":"name"},{"is_required":true,"type":"email"}]]},"disable_get_cookies":false,"offline_survey_phone_label":"Phone","pre_chat_error_text":"Please enter your name and email in case we get disconnected.","feedback_survey_question_chat_low":"Not at all satisfied","prechat_survey_email_placeholder":"Enter your email...","prechat_website_validation_message":"Please enter a valid URL","use_theme":"cryptic_capybara","hb_chatbox_size":"md","email_body_error_text":"You must complete all fields and specify a valid email address","show_pre_chat":0,"send_transcript_placeholder":"Email","inline_css_url_quirks":"static.olark.com/css/8/4/844fb02b40ed2e8b64b542b43ff5f68e.css","check_for_status":"Olark Chat (startup)","in_chat_text":"Now chatting","require_email":1,"inline_css_url_ie":"static.olark.com/css/0/b/0b5c605cbc1c9745fb33b5e81c6184ad.css","hb_position":"right","allowed_domains":"my.bobcares.com,portal.bobcares.com","generic_upload_error_text":"File uploading is currently unavailable.","feedback_survey_complete_button_text":"Feedback Sent","offline_survey_email_label":"Email","branding":"whitelabel","feedback_survey_end_message":"Thank you for your feedback :)","feedback_survey_question_operator_speed_text":"How responsive was the chat agent?","flash_icons":1,"operator_is_typing_text":"is typing...","visitor_id_error_text":"File uploading is currently unavailable.","restart_chat_online_button_text":"Start conversation","habla_sizebutton_text_expanded":"_","default_flash_off_icon":"https://static.olark.com/js/images/white.ico","expandOnMessageReceived":0,"disable_default_visitor_information":0,"hb_primary_color":"#3C78D3","right_to_left":false,"offline_survey_name_label":"Name","close_hides_window":false,"send_transcript_complete_button_text":"Transcript Sent","expandOnFirstMessageReceived":1,"feedback_survey_question_chat_high":"Extremely satisfied","feedback_survey_question_operator_intelligence_low":"Not at all knowledgeable","offline_survey_submit_button_text":"Send","offline_phone_validation_message":"Please enter a valid phone number","operator_has_stopped_typing_text":"has stopped typing","resize_length":25,"feedback_survey_question_operator_intelligence_text":"How knowledgeable was the chat agent?","width":260,"branding_panel_link_text":"Try Olark on your site","offline_email_validation_message":"Please enter a valid email address","feedback_survey_question_3_text":"Question 3 of 5","end_chat_button_text":"End Chat","offline_survey_phone_placeholder":"Enter your phone number...","popout_css_url":"static.olark.com/css/9/8/98c23c22d4700f33524c3faf5aa12bd2.css","offline_survey_next_button_text":"Next","feedback_survey_button_submitting":"Submitting","hbl_cookie_path":"/","feedback_survey_cancel_text":"Cancel","busy_text":"Contact us","myname":"you","hb_theme_override":{"bg_image_size":"130px","primary_color":"#751A33","enabled":false,"bg_image_url":"https://static.olark.com/a/theme/images/seasonal-fall-1.png","expiration_date":"1678989332"},"offline_msg_mode":1,"is_inline":0,"hide_min_max_buttons":0,"habla_end_popout_text":"&lt;&lt;","file_size_error_text":"This file size is too large.","disable_set_cookies":false,"offline_button_text":"Leave A Message","allow_change_colors":true,"is_popup":0,"show_away_as_header":0,"forced_rpc_server":"knrpc.olark.com/nrpc","feedback_survey_question_operator_attitude_text":"How friendly was the chat agent?","habla_popout_text":"&gt;","plugin_path":"https://static.olark.com/js/plugins/","disable_extra_br":true,"processing_file_error_text":"There was a problem processing your file.","height":155,"before_chat_text":"Chat with us","habla_special_div_show_type":"block","line_length":21,"bottom_margin":0,"send_transcript_begin_button_text":"Send Transcript","prechat_survey_website_label":"Website","flash_titlebar":1,"habla_sizebutton_text_compressed":"^","offline_survey_website_placeholder":"Enter your website...","ended_chat_message":"This chat has ended.","hb_show_button_text":true,"offline_message":"We're not around, but we'd love to chat another time.","require_offline_phone":0,"offline_survey_name_placeholder":"Enter your name...","default_flash_on_icon":"https://static.olark.com/js/images/orange.ico","corner_position":"BR","away_text":"Contact us","feedback_survey_submission_error_message":"There was an error submitting your answer, please try again.","feedback_survey_question_additional_feedback_text":"Additional Feedback.","branding_panel_message_text":"10,000+ companies rely on Olark software to chat with customers directly.","sending_text":"sending","offline_website_validation_message":"Please enter a valid URL","branding_panel_cancel_text":"Go back","show_end_popout":0,"free_branding_template":"Powered By <a href=\"http://www.olark.com/?rid={idstring}&amp;powered_f=1&amp;utm_medium=widget&amp;utm_campaign=powered_by_free&amp;utm_source={idstring}\" target=\"_blank\">Olark</a>","start_hidden":0,"pre_chat_message":"Questions? We'd love to chat.","feedback_survey_question_additional_feedback_placeholder":"Type message here","default_localization":"en-US","hb_dark_theme":false,"prechat_phone_validation_message":"Please enter a valid phone number","rules":[{"kind":"Rule","perPage":true,"description":"Blocking  user ip ","perVisit":false,"clause":{"clauses":[{"kind":"ContainsClause","right":"178.19.226.25","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"ContainsClause","right":"213.212.201.74","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"ContainsClause","right":"114.23.106.92","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"ContainsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"OrClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.hide","options":{}}],"whenOnline":true,"perVisitor":false,"id":"1593698138714004910173833884568","whenOffline":true},{"kind":"Rule","perPage":false,"description":"Automatic chat in Emergency support page after 95 secs","perVisit":false,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/emergency-server-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Facing technical problems that can't wait? Get immediate access to our team of highly trained engineers who will resolve your issue!"}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires emergency support assistance"}}],"whenOnline":true,"perVisitor":true,"id":"1568404701807001470733400042834","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Automatic chat in Outsourced Hosting Support page after 95 secs","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/outsourced-hosting-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Looking for technical support for your customers? I can help you choose the right solution. :)"}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires help with outsourced hosting support"}}],"whenOnline":true,"perVisitor":false,"id":"156761005416905211028299786256","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Auto chat initiation after 95 secs on All In One Support page","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/all-in-one-outsourced-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Looking for technical support for your customers? I can help you choose the right solution. :)"}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires help with All In One Support"}}],"whenOnline":true,"perVisitor":false,"id":"156760975717802387268709944319","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Ask if customer needs cPanel migration help 95 secs","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/blog/cpanel-price-rise/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentForThisVisit","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"We can help you reduce cPanel license costs. Talk to our solutions expert."}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires help with cPanel migration"}}],"perPage":false,"perVisitor":false,"id":"156180664581907395646480190301","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Initiate Chat when Visitor Spends more than 95 secs on a Server management page","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/server-management/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Do you need any technical help with your servers? Our server administrators are on standby, and we can help you right away."}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires Server Management assistance"}}],"whenOnline":true,"perVisitor":false,"id":"1560879930585090330939226406","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Start Chat after user spends more than 120 secs on a non blog page","perVisit":false,"clause":{"clauses":[{"kind":"DoesNotContainClause","right":"blog","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/server-management/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/blog/cpanel-price-rise/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/all-in-one-outsourced-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/outsourced-hosting-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/emergency-server-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":120,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}}],"perPage":true,"perVisitor":false,"id":"154991830899706140224232233096","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Start chat after user spends more than 80 secs on a blog page","perVisit":true,"clause":{"clauses":[{"kind":"GreaterThanClause","right":80,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"ContainsClause","right":"bobcares.com/blog/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.box.expand","options":{}}],"perPage":false,"perVisitor":false,"id":"154969738656207923692247409975","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Start a chat after a customer has viewed 2 pages, so I can engage without being too intrusive","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":2,"left":{"varname":"visitor.pageCountForThisVisit","kind":"VariableClause"}}],"kind":"OrClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Hi, we're here to answer any questions"}},{"kind":"Action","method":"api.box.expand","options":{}}],"whenOnline":true,"perVisitor":false,"id":2316,"whenOffline":false},{"kind":"Rule","perPage":false,"description":"Highlight returning visitors in my buddy list","perVisit":false,"clause":{"clauses":[{"kind":"GreaterThanClause","right":1,"left":{"varname":"visitor.visitCount","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.chat.updateVisitorNickname","options":{"snippet":"Returning Visitor"}}],"whenOnline":true,"perVisitor":true,"id":2317,"whenOffline":false},{"kind":"Rule","perPage":false,"description":"Target my French visitors by sending a custom message in their language","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":"FR","left":{"varname":"visitor.countryCode","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Bonjour, Comment allez-vous?"}}],"whenOnline":true,"perVisitor":false,"id":"15490013273850","whenOffline":false}],"feedback_survey_question_chat_text":"How satisfied were you with this chat?","require_name":2,"show_away":0,"feedback_survey_question_operator_intelligence_high":"Extremely knowledgeable","feedback_survey_button_next":"Next","left_margin":20,"conversation_id_error_text":"File uploading is currently unavailable.","hide_when_away":0,"feedback_survey_question_5_text":"Question 5 of 5","prechat_survey_name_placeholder":"Enter your name...","google_analytics_domain":"auto","prechat_survey_submit_button_text":"Start chatting","local_user_display_name":"&rarr;","dismiss_message_text":"Dismiss","show_in_buddy_list":"chatting","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj4=","site_id":"3928-440-10-9506","template":null,"operators":{"1032222":{"avatar_url":"//static.olark.com/imageservice/6f9db67cd649432b7d785b7d36e2430f.png"},"1045587":{"avatar_url":"//static.olark.com/imageservice/4b4afb2dd2d2a133e06eff36c25866ee.png"},"1045588":{"avatar_url":"//static.olark.com/imageservice/473f85dad38cc6437bc205155a65007d.png"},"1085801":{"avatar_url":"//static.olark.com/imageservice/83b51adacbc59aa19fcd1d8233cf6c2d.png"},"1128655":{"avatar_url":"//static.olark.com/imageservice/e1534871c9a3fa5bb84f7dc4b7044a25.png"}},"md5":"925aeee5b6c62279d528cebdd4d2dcb8"},"GoogleAnalytics":{"enabled":true,"had_conversation_page_slot_number":5,"had_conversation_session_slot_number":4,"create_custom_tracker":false,"allow_linker":false,"enable_custom_variables":true,"had_conversation_visitor_slot_number":3,"load_ga_if_missing":false,"track_chat_start_page":true},"CalloutBubble":{"bubble_image_url":"https://static.olark.com/imageservice/library/simple/have-questions.png","enabled":true,"slide":true},"Feedback":{"enabled":true},"Sounds":{"enabled":true}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="3928-440-10-9506";
          });
          olark._.finish();
        }
      })();
    