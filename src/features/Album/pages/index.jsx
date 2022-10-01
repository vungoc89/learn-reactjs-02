import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/a/a/f/1aaf557b19efdb19185f66473a7272e8.jpg',
        },
        {
            id: 2,
            name: 'Rap Viet Nghe Là Nghiền',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/5/8/6/4/58642d2e3da7d97ab37e52e497bdcf7f.jpg',
        },
        {
            id: 3,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg',
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} ></AlbumList>
        </div>
    );
}

export default AlbumFeature;