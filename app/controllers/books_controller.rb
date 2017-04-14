class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /books
  # GET /books.json
  def index
  # raise params.inspect
 #    @ratings = Rating.all
 #    if !params[:rating].blank?
 #   @books = Book.by_rating(params[:rating1], params[:rating2])
 # elsif !params[:date].blank?
 #    if params[:date] == "Today"
 #      # raise 'inside today params if block'.inspect
 #      @books = Book.today
 #    else
 #      @books = Book.yesterday
 #    end
  if !params[:sort].blank?
  elsif params[:sort] == "Title"
      @books = Book.title_sort
    else
      @books = Book.author_sort
    end
 else
   # if no filters are applied, show all posts
   @books = Book.all
 end



  # GET /books/1
  # GET /books/1.json
  def show
  end

  # GET /books/new
  def new
    @book = Book.new
    @book.ratings.build
  end

  # GET /books/1/edit
  def edit
  end


  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)

    respond_to do |format|
      if @book.save
        format.html { redirect_to @book, notice: 'Book was successfully created.' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        format.json { render :show, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # def top_five
  #   @top_books = Book.top_five
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:title, :author, :genre, :description, :page_length, ratings_attributes: [:stars])
    end
end
