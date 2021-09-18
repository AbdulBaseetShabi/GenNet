from functools import wraps

def admin_access(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # replace with real code later
        admin = True
        if not admin:
            return "Forbidden: Admin access required.", 403
        return f(*args, **kwargs)
    return decorated_function

def login_access(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # replace with real code later
        login = True
        if not login:
            return "Forbidden: Login access required.", 403
        return f(*args, **kwargs)
    return decorated_function