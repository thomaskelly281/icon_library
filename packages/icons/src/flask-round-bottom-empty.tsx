import { mdiFlaskRoundBottomEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskRoundBottomEmpty(props: IconComponentProps) {
  return <Icon path={mdiFlaskRoundBottomEmpty} {...props} />;
}

export { mdiFlaskRoundBottomEmpty as path };
