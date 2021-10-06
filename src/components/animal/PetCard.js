import "../customer/Customer.css"

export const PetCard = ({ pet }) => {

  return (
  <>
        <div className="customer__pet">

        <div className="customer__info--petname"><strong>Pet Name: </strong>{pet.name}</div>

        <div className="customer__info--petbreed"><strong>Breed: </strong> {pet.breed}</div>

        </div>
  </>
  )
}