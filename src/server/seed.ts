import { ProductModel, CategoryModel, CouponModel } from './models';
import { INITIAL_PRODUCTS, INITIAL_CATEGORIES, INITIAL_COUPONS } from '../data/initialData';

export async function seedDatabaseIfEmpty() {
  try {
    const validProductIds = INITIAL_PRODUCTS.map(p => p.id);
    
    // Clean up any old dummy products not in the official catalog
    await ProductModel.deleteMany({ id: { $nin: validProductIds } });

    console.log(`[MongoDB Seed] Syncing ${INITIAL_PRODUCTS.length} official products into MongoDB Atlas...`);
    
    await Promise.all(
      INITIAL_PRODUCTS.map(prod =>
        ProductModel.findOneAndUpdate(
          { id: prod.id },
          { $set: prod as any },
          { upsert: true, returnDocument: 'after' }
        )
      )
    );
    console.log(`[MongoDB Seed] Upserted all ${INITIAL_PRODUCTS.length} verified products successfully.`);

    const validCategoryIds = INITIAL_CATEGORIES.map(c => c.id);
    await CategoryModel.deleteMany({ id: { $nin: validCategoryIds } });
    
    await Promise.all(
      INITIAL_CATEGORIES.map(cat =>
        CategoryModel.findOneAndUpdate(
          { id: cat.id },
          { $set: cat as any },
          { upsert: true, returnDocument: 'after' }
        )
      )
    );

    await Promise.all(
      INITIAL_COUPONS.map(coup =>
        CouponModel.findOneAndUpdate(
          { code: coup.code },
          { $set: coup as any },
          { upsert: true, returnDocument: 'after' }
        )
      )
    );

    console.log('[MongoDB] Database synchronized and clean with PlayBeat verified catalog.');
  } catch (error) {
    console.error('[MongoDB Seed Error]:', error);
  }
}
