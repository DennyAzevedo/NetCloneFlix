import React from 'react'
import './FeaturedMovie.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

export default ({ item }) => {
	
	let firstDate = new Date(item.first_air_date)
	let description = item.overview
	let genres = []

	if (description.length > 200) {
		description = description.substring(0, 200) + ' ...';
	}

	for (let indice in item.genres) {
		genres.push(item.genres[indice].name)
	}

	return (
		<section className="featured" style={{
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
		}}>
			<div className="featured--vertical">
				<div className="featured--horizontal">
					<div className="featured--name">{item.name}</div>
					<div className="featured--info">
						<div className="featured--points">{item.vote_average}</div>
						<div className="featured--year">{firstDate.getFullYear()}</div>
						<div className="featured--seasons">
							{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}
						</div>
					</div>
					<div className="featured--description">
						{description}
					</div>
					<div className="featured--buttons">
						<a
							href={`/watch/${item.id}`}
							className="featured--watchbutton"
						>
							<PlayArrowIcon />
							Asssitir
						</a>
						<a
							href={`/list/add/${item.id}`}
							className="featured--mylistbutton"
						>
							<AddIcon />
							Minha Lista
						</a>
					</div>
					<div className="featured--genres">
						<strong>Gêneros: </strong> {genres.join(', ')}
					</div>
				</div>
			</div>
		</section>
	)
}