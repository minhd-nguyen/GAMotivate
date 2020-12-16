import React from 'react';
import "./CardProfile.css";

const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
            <img for="photo-upload" alt='' src={src} />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
    </label>

const Name = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="name">
            name:
        </label>
        <input
            id="name"
            type="text"
            onChange={onChange}
            maxlength="25"
            value={value}
            placeholder="full name"
            required />
    </div>

const Specialty = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="specialty">
            specialty:
        </label>
        <input
            id="specialty"
            type="text"
            onChange={onChange}
            maxLength="35"
            value={value}
            placeholder="occupation"
            required />
    </div>

const Cohort = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="cohort">
            cohort:
        </label>
        <input
            id="cohort"
            type="text"
            onChange={onChange}
            maxLength="35"
            value={value}
            placeholder="GA cohort"
            required />
    </div>

const Location = ({
    onChange,
    value
}) =>
    <div className="field">
        <label htmlFor="location">
            location:
        </label>
        <input
            id="location"
            type="text"
            onChange={onChange}
            maxLength="35"
            value={value}
            placeholder="city, state"
            required />
    </div>

const Profile = ({
    onSubmit,
    src,
    name,
    specialty,
    cohort,
    location,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            <h1>Profile</h1>
            <label className="custom-file-upload fas">
                <div className="img-wrap" >
                    <img for="photo-upload" alt='' src={src} />
                </div>
            </label>
            <div className="name">{name}</div>
            <div className="specialty">{specialty}</div>
            <div className="cohort">{cohort}</div>
            <div className="location">{location}</div>
            <button type="submit" className="edit">Edit Profile </button>
        </form>
    </div>

const Edit = ({
    onSubmit,
    children,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            {children}
            <button type="submit" className="save">Save</button>
        </form>
    </div>

class CardProfile extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: '../../Assets/icon_user.png',
        name: '',
        specialty: '',
        cohort: '',
        location: '',
        active: 'edit'
    }

    photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    editName = e => {
        const name = e.target.value;
        this.setState({
            name,
        });
    }

    editSpecialty = e => {
        const specialty = e.target.value;
        this.setState({
            specialty,
        });
    }

    editCohort = e => {
        const cohort = e.target.value;
        this.setState({
            cohort,
        });
    }

    editLocation = e => {
        const location = e.target.value;
        this.setState({
            location,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
        this.setState({
            active: activeP,
        })
    }

    render() {
        const { 
            imagePreviewUrl,
            name,
            specialty,
            cohort,
            location,
            active } = this.state;
        return (
            <div>
                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                        <Name onChange={this.editName} value={name} />
                        <Specialty onChange={this.editSpecialty} value={specialty} />
                        <Cohort onChange={this.editCohort} value={cohort} />
                        <Location onChange={this.editLocation} value={location} />
                    </Edit>
                ) : (
                        <Profile
                            onSubmit={this.handleSubmit}
                            src={imagePreviewUrl}
                            name={name}
                            specialty={specialty}
                            cohort={cohort} 
                            location={location}
                        />
                )}
            </div>
        )
    };
}

export default CardProfile;