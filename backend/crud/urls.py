from django.urls import path
from .views import *


urlpatterns = [

    # GET ALL + POST
    path(
        'employees/',
        employee_list_create,
        name='employee-list-create'
    ),

    # GET SINGLE + PUT + DELETE
    path(
        'employees/<int:pk>/',
        employee_detail,
        name='employee-detail'
    ),

]