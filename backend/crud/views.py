from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Employee
from .serializers import EmployeeSerializer


# GET ALL + POST

@api_view(['GET', 'POST'])
def employee_list_create(request):

    # GET ALL EMPLOYEES
    if request.method == 'GET':

        employees = Employee.objects.all().order_by('-id')

        serializer = EmployeeSerializer(
            employees,
            many=True
        )

        return Response(serializer.data)

    # CREATE EMPLOYEE
    elif request.method == 'POST':

        serializer = EmployeeSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# GET SINGLE + UPDATE + DELETE

@api_view(['GET', 'PUT', 'DELETE'])
def employee_detail(request, pk):

    try:
        employee = Employee.objects.get(id=pk)

    except Employee.DoesNotExist:

        return Response(
            {
                "error": "Employee not found"
            },
            status=status.HTTP_404_NOT_FOUND
        )

    # GET SINGLE
    if request.method == 'GET':

        serializer = EmployeeSerializer(employee)

        return Response(serializer.data)

    # UPDATE
    elif request.method == 'PUT':

        serializer = EmployeeSerializer(
            employee,
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # DELETE
    elif request.method == 'DELETE':

        employee.delete()

        return Response(
            {
                "message": "Employee deleted successfully"
            },
            status=status.HTTP_204_NO_CONTENT
        )