import { mdiBlurRadial } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlurRadial(props: IconComponentProps) {
  return <Icon path={mdiBlurRadial} {...props} />;
}

export { mdiBlurRadial as path };
