from rest_framework import serializers
from .models import * 

class ProjectSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Project
        fields = ('id','name','projectmanager', 'start_date', 'end_date', 'comments', 'status')


class ProjectManagerSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProjectManager
        fields = ('name', 'id')
 