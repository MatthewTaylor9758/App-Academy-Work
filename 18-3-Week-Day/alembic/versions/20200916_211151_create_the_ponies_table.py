"""create the ponies table

Revision ID: d39a8eaa36bc
Revises: cff6190e170d
Create Date: 2020-09-16 21:11:51.621709

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd39a8eaa36bc'
down_revision = 'cff6190e170d'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'ponies',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(100), nullable=False),
        sa.Column('breed', sa.String(20), nullable=False),
        sa.Column('birth_year', sa.Integer, nullable=False),
        sa.Column('owner_id',
                    sa.Integer,
                    sa.ForeignKey('owners.id'),
                    nullable=False)
    )


def downgrade():
    op.drop_table('ponies')
