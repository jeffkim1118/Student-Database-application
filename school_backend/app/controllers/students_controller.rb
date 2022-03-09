class StudentsController < ApplicationController

    #initiate fetch request targeting an API endpoint

    # Our API endpoint
    get '/students' do

        students = Student.all.order(:student_name).limit(10)
        #demand is sent to student model
        students.to_json(only: [:student_name, :age], include: :school)
    end

    #Retrieve individual student via param (:id)
    get '/students/:id' do
        Student.find(params[:id]).to_json(include: :appointments)
    end

end