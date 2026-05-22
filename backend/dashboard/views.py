from rest_framework.response import Response
from rest_framework.decorators import api_view

from crud.models import Employee
from crud.serializers import EmployeeSerializer


@api_view(['GET'])
def all_employee_details(request):

    employees = Employee.objects.all().order_by('-id')

    serializer = EmployeeSerializer(
        employees,
        many=True
    )

    return Response({
        "total_employees": employees.count(),
        "employees": serializer.data
    })