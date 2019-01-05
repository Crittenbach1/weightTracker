class Api::V1::PersonsController < Api::V1::BaseController
  def index
    respond_with Person.all
  end

  def create
    binding.pry
    @person = Person.create(person_params)
    @weight = @person.weights.build(params[:weights_attributes])

    #@person.weights.build(params[:weights_attributes])
    respond_with :api, :v1, Person.create(person_params), include: "person.weights"
  end

  private

  def person_params
    params.require(:person).permit(:name, weights_attributes: [:pounds, :currentDate])
  end
end
