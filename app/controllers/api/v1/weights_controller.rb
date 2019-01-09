class Api::V1::WeightsController < Api::V1::BaseController
  def index
    respond_with Weight.all
  end

  def create
    # binding.pry
     e = Weight.where(:person_id => params[:person_id], :currentDate => params[:currentDate])
      if !e.empty?
        e.first.pounds = params[:pounds]
        e.first.save!
        @weight = e
      else
        @weight = Weight.create(weight_params)
    end

    respond_to do |format|
       format.json { render json: @weight }
    end

  end

  private

  def weight_params
    params.require(:weight).permit(:id, :pounds, :currentDate, :person_id)
  end
end
