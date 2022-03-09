class StudentsController < ApplicationController

    #initiate fetch request targeting an API endpoint

    # Our API endpoint
    get '/students' do
        # Student.all.to_json
        students = Student.all.order(:student_name)
        # #demand is sent to student model
        # students.to_json(only: [:student_name, :age], include: :school)
        students.to_json(include: :school)
    end

    #Retrieve individual student via param (:id)
    get '/students/:id' do
        Student.find(params[:id]).to_json(include: :appointments)
    end

end