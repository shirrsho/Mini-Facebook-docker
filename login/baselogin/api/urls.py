from django.urls import path,include

from . import views
# from ...baseregister import views as regviews

from rest_framework_simplejwt.views import (
    TokenRefreshView
)

# from login import baseregister

urlpatterns = [
    path('',views.statuses),
    path('login/', views.MyTokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path('login/token/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    # path('login/register/',regviews.register_request, name="register"),
    # path('login/register/',include('...baseregister.urls'))
    path('login/register/',views.register_request)
]