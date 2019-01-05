class Api::V1::PersonsController < Api::V1::BaseController
  def index
    @persons = Person.all
    respond_to do |format|
       format.json { render json: @persons, include: "weights" }
     end
  end

  def create
    binding.pry
    @person = Person.create(person_params)
  #  @weights_attributes = params[:weights_attributes]
  #  @weight = Weight.create({ pounds: @weights_attributes[:pounds],
    #                          currentDate: @weights_attributes[:pounds],
    #                          person_id: @person.id })

    #respond_with :api, :v1, Person.create(person_params)
    respond_to do |format|
       format.json { render json: @person, include: "weights" }
     end
  end

  private

  def person_params
    params.require(:person).permit(:id, :name, weights_attributes: [:pounds, :currentDate])
  end
end
