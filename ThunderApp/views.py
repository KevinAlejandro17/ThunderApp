from django.views import View
from ThunderApp.models import Users
from ThunderApp.models import Bills
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

import datetime
import random


class UsersView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            users = list(Users.objects.filter(id=id).values())
            if (len(users) > 0):
                user = users[0]
                datos = {'message': 'Success', 'user': user}
            else:
                datos = {'message': 'User not found!'}
            return JsonResponse(datos)
        else:
            users = list(Users.objects.values())
            if len(users) > 0:
                datos = {'users': users}
            else:
                datos = {'message': 'Users not found'}
            return JsonResponse(datos)

    @method_decorator(csrf_exempt)
    def verifyUser(request):
        data = json.loads(request.body)
        email = data["email"]
        if (id == 0):
            datos = {'message': 'User not found!'}
        else:
            user = list(Users.objects.filter(
                email=email, password=data["password"], role=data["role"]).values())
            if (len(user) > 0):
                datos = {'message': 'Success', 'user': user}
            else:
                datos = {'message': 'Incorrect ID or incorrect password'}
            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        datos = {'message': 'Success'}

        if (jd['isActive'] == 'true'):
            boolean = True
        else:
            boolean = False
        try:
            Users.objects.create(id=jd['id'], lastName=jd['lastName'], firstName=jd['firstName'],
                                 birthDate=jd['birthDate'], password=jd['password'], email=jd['email'], address=jd['address'], phone=jd['phone'], role=jd['role'], isActive=boolean)

        except Exception as e:
            print("Fall?? la inserci??n")
            datos = {'message': 'Fail'}
            return JsonResponse(datos)

        return BillsView.as_view()(self.request)

    def put(self, request, id):
        jdu = json.loads(request.body)
        jd = jdu['user']
        users = list(Users.objects.filter(id=id).values())
        if len(users) > 0:
            user = Users.objects.get(id=id)
            user.id = jd['id']
            user.lastName = jd['lastName']
            user.firstName = jd['firstName']
            user.birthDate = jd['birthDate']
            user.email = jd['email']
            user.address = jd['address']
            user.phone = jd['phone']
            user.role = jd['role']
            user.isActive = jd['isActive']
            user.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': "User not found..."}
        return JsonResponse(datos)

    def delete(self, request, id):
        users = list(Users.objects.filter(id=id).values())
        if len(users) > 0:
            Users.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos = {'message': "User not found..."}
        return JsonResponse(datos)


class BillsView(View):

    @method_decorator(csrf_exempt)
    def payBill(request):
        data = json.loads(request.body)
        id = data["id"]
        if (id == 0):
            datos = {'message': 'Bill not found!'}
        else:
            print("HE ENTRAU AQUI QUE PEDAZO DE MAKINA")
            datos = (list(Bills.objects.filter(userID=id).values('isPaid')))[
                0]['isPaid']
            print(datos)
            if (datos == False):
                Bills.objects.filter(userID=id).update(isPaid=True)
                Bills.objects.filter(userID=id).update(status="paid")
                datos = {'message': 'Bill has been payed!'}
            else:
                datos = {'message': 'Bill not found'}
        return JsonResponse(datos)


    @method_decorator(csrf_exempt)
    def alterDate(request):
        data = json.loads(request.body)
        id = data["id"]
        date = data["date"]
        print("Los datos de entrada son:", data)
        if (id == 0):
            datos = {'message': 'Bill not found!'}
        else:
            Bills.objects.filter(userID=id).update(billingDate=date)
            datos = {'message': 'Date change successful'}
        return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        datos = {'message': 'Success'}
        try:
            if (jd['role'] == "Cliente"):
                Bills.objects.create(billingDate=datetime.datetime.now() + datetime.timedelta(days=30),
                                     dueDate=datetime.datetime.now() + datetime.timedelta(days=30) +
                                     datetime.timedelta(days=10),
                                     amount=0,
                                     status="null",
                                     payMethod="null",
                                     userID=jd['id'],
                                     isGenerated=False,)
        except Exception as e:
            print("Fall?? la inserci??n")
            datos = {'message': 'Fail'}
            return JsonResponse(datos)

        return JsonResponse(datos)

    def get(self, request, id=0):
        if (id > 0):
            bills = list(Bills.objects.filter(userID=id).values())
            if (len(bills) > 0):
                bill = bills[0]

                due = (list(Bills.objects.filter(userID=id).values('dueDate')))
                dueDate = due[0]['dueDate']

                billing = (list(Bills.objects.filter(
                    userID=id).values('billingDate')))
                billingDate = billing[0]['billingDate']

                fechaActual = datetime.datetime.now()
                isGen = (list(Bills.objects.filter(userID=id).values('isGenerated')))[
                    0]['isGenerated']

                if (billingDate <= fechaActual.date() and isGen != True):
                    Bills.objects.filter(userID=id).update(isGenerated=True)
                    energyConsumption = random.randrange(100, 200)
                    amountCalc = 500*energyConsumption
                    Bills.objects.filter(userID=id).update(amount=amountCalc)
                    billData = {'message': 'Success', 'bill': bill}

                elif (dueDate <= fechaActual.date()):
                    Bills.objects.filter(userID=id).update(status='mora')
                    billData = {'message': 'Success', 'bill': bill}

                else:
                    billData = {'message': 'Success', 'bill': bill}

            else:
                billData = {'message': 'Bill not found!'}
            return JsonResponse(billData)
        else:
            bills = list(Bills.objects.values())
            if len(bills) > 0:
                billData = {'bills': bills}
            else:
                billData = {'message': 'Bill not found'}
            return JsonResponse(billData)
