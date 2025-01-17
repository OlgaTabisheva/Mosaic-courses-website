from django.contrib import admin
from django.urls import path, include, re_path
# from django.conf.urls import url

from django.conf import settings
from django.conf.urls.static import static

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
# from django.conf.urls import url


schema_view = get_schema_view(
   openapi.Info(
      title='Mosaic API',
      default_version='v1',
      description='Документация для api проекта Mosaic',
      # terms_of_service="URL страницы с пользовательским соглашением",
      contact=openapi.Contact(email='will be there'),
      license=openapi.License(name='BSD License'),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path(r'mdeditor/', include('mdeditor.urls')),
    path(r'mdeditor/', include('mdeditor.urls'))
    
]

# TODO объединить
urlpatterns += [
   re_path(r'^swagger(?P<format>\.json|\.yaml)$',
           schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0),
           name='schema-swagger-ui'),
   re_path(r'^api/redoc/$', schema_view.with_ui('redoc', cache_timeout=0),
           name='schema-redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
