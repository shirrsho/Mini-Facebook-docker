from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth import get_user_model

from .forms import NewUserForm


User = get_user_model()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        print(user.username)
        token['username'] = user.username
        token['email'] = user.email

        # ...

        return token
    
    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }
        print(attrs)
        # This is answering the original question, but do whatever you need here. 
        # For example in my case I had to check a different model that stores more user info
        # But in the end, you should obtain the username to continue.
        
        user_obj = User.objects.filter(email=attrs.get("username")).first()
        if user_obj:
            credentials['username'] = user_obj.username
        
        return super().validate(credentials)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def statuses(request):
    if request.method == "GET":
        routes = [
        '/api/token',
        '/api/token/refresh',
        ]
        return Response(routes)

@api_view(['POST'])
def register_request(request):
    form = NewUserForm(data=request.data)
    if form.is_valid():
        form.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)