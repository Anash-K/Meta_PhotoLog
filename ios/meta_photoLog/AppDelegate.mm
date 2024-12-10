#import "AppDelegate.h"
#import "RNBootSplash.h" 
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"meta_photoLog";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  //  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:self.window.rootViewController.view];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

// Customize the root view (if needed)
- (void)customizeRootView:(RCTRootView *)rootView {
  [super customizeRootView:rootView];
  // Initialize the splash screen here (alternative placement)
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView];
}



@end
