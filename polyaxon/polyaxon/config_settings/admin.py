from polyaxon.config_manager import config

admin_name = config.get_string('POLYAXON_ADMIN_NAME', is_optional=True)
admin_mail = config.get_string('POLYAXON_ADMIN_MAIL', is_optional=True)

if admin_mail and admin_mail:
    ADMINS = (
        (admin_name, admin_mail),
    )
    MANAGERS = ADMINS
