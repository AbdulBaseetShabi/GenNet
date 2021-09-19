from functools import wraps

def admin_access(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # replace with real code later
        admin = True
        if admin:
            return f(*args, **kwargs)
        return "Forbidden: Admin access required.", 403
    return decorated_function

def login_access(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # replace with real code later
        admin = True
        login = True
        if admin or login:
            return f(*args, **kwargs)
        return "Forbidden: Login access required.", 403
    return decorated_function