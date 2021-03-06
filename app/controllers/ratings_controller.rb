class RatingsController < ApplicationController
  before_action :set_rating, only: [:show, :edit, :update, :destroy]

  def index
    # @book = #find the book according to the params book_id
    if params[:book_id]
      @book = Book.find_by_id(params[:book_id])
      @ratings = @book.ratings
    else
      @ratings = Rating.all
    end
    # @ratings = Rating.all || @book.ratings
    # @ratings = @book.ratings
    render json: @ratings
end

  def show
render json: @rating
  end

  def new
    @rating = Rating.new
  end

  def edit
  end

  def create
    @book = Book.find_by_id(params[:book_id])
    # @rating = @book.ratings.build(rating_params)
    @rating = Rating.new(rating_params) || @book.ratings.build(rating_params)

    # respond_to do |format|
      if @rating.save
        # render json: @ratings

        format.html { redirect_to @rating, notice: 'Rating was successfully created.' }
        format.json { render :show, status: :created, location: @rating }
      else
        format.html { render :new }
        format.json { render json: @rating.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @rating.update(rating_params)
        render json: @ratings
      #   format.html { redirect_to @rating, notice: 'Rating was successfully updated.' }
      #   format.json { render :show, status: :ok, location: @rating }
      # else
      #   format.html { render :edit }
      #   format.json { render json: @rating.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @rating.destroy
    render json: @rating
    #
    # respond_to do |format|
    #   format.html { redirect_to ratings_url, notice: 'Rating was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end


  private
    # Use callbacks to share common setup or constraints between actions.

    def set_rating
      @rating = Rating.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rating_params
      params.require(:rating).permit(:stars)
    end
end
