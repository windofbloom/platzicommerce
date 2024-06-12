import { IconBrandFigma, IconBrandGithub, IconBrandBehance, IconLetterC, IconBrandInstagram } from '@tabler/icons-react';

function Footer () {
    return (
        <footer className='w-full flex flex-col bg-black text-white p-4 text-center'>
            <div>
            <p className="font-mono mb-4">Made with ♥ by <a href="https://github.com/windofbloom" 
                className="hover:underline font-bold">windofbloom</a></p>
            </div>
            <div className='flex justify-center gap-3'>
                <a href="https://www.figma.com/@windofbloom" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconBrandFigma style={{ cursor: 'pointer' }} />
                </a>
                <a href="https://github.com/windofbloom" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconBrandGithub style={{ cursor: 'pointer' }} />
                </a>
                <a href="https://www.behance.net/windofbloom" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconBrandBehance style={{ cursor: 'pointer' }} />
                </a>
                <a href="https://cara.app/windofbloom" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconLetterC style={{ cursor: 'pointer' }} />
                </a>
                <a href="https://www.instagram.com/windofbloom" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <IconBrandInstagram style={{ cursor: 'pointer' }} />
                </a>
            </div>
        </footer>
    )
}

export default Footer