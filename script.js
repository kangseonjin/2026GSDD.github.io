
const worksDataset = [
    // Visual (A ~ AK) - 37명 x 2작품 = 74개
    { id: 'V_A_1', category: 'Visual', designer: 'A', title: '작품명 입력 A-1', desc: 'A 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_A_p1.png', detailPrefix: 'pe_A_p1', imagesCount: 2 },
    { id: 'V_A_2', category: 'Visual', designer: 'A', title: '작품명 입력 A-2', desc: 'A 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_A_p2.png', detailPrefix: 'pe_A_p2', imagesCount: 2 },
    { id: 'V_B_1', category: 'Visual', designer: 'B', title: '작품명 입력 B-1', desc: 'B 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_B_p1.png', detailPrefix: 'pe_B_p1', imagesCount: 2 },
    { id: 'V_B_2', category: 'Visual', designer: 'B', title: '작품명 입력 B-2', desc: 'B 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_B_p2.png', detailPrefix: 'pe_B_p2', imagesCount: 2 },
    { id: 'V_C_1', category: 'Visual', designer: 'C', title: '작품명 입력 C-1', desc: 'C 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_C_p1.png', detailPrefix: 'pe_C_p1', imagesCount: 2 },
    { id: 'V_C_2', category: 'Visual', designer: 'C', title: '작품명 입력 C-2', desc: 'C 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_C_p2.png', detailPrefix: 'pe_C_p2', imagesCount: 2 },
    { id: 'V_D_1', category: 'Visual', designer: 'D', title: '작품명 입력 D-1', desc: 'D 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_D_p1.png', detailPrefix: 'pe_D_p1', imagesCount: 2 },
    { id: 'V_D_2', category: 'Visual', designer: 'D', title: '작품명 입력 D-2', desc: 'D 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_D_p2.png', detailPrefix: 'pe_D_p2', imagesCount: 2 },
    { id: 'V_E_1', category: 'Visual', designer: 'E', title: '작품명 입력 E-1', desc: 'E 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_E_p1.png', detailPrefix: 'pe_E_p1', imagesCount: 2 },
    { id: 'V_E_2', category: 'Visual', designer: 'E', title: '작품명 입력 E-2', desc: 'E 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_E_p2.png', detailPrefix: 'pe_E_p2', imagesCount: 2 },
    { id: 'V_F_1', category: 'Visual', designer: 'F', title: '작품명 입력 F-1', desc: 'F 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_F_p1.png', detailPrefix: 'pe_F_p1', imagesCount: 2 },
    { id: 'V_F_2', category: 'Visual', designer: 'F', title: '작품명 입력 F-2', desc: 'F 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_F_p2.png', detailPrefix: 'pe_F_p2', imagesCount: 2 },
    { id: 'V_G_1', category: 'Visual', designer: 'G', title: '작품명 입력 G-1', desc: 'G 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_G_p1.png', detailPrefix: 'pe_G_p1', imagesCount: 2 },
    { id: 'V_G_2', category: 'Visual', designer: 'G', title: '작품명 입력 G-2', desc: 'G 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_G_p2.png', detailPrefix: 'pe_G_p2', imagesCount: 2 },
    { id: 'V_H_1', category: 'Visual', designer: 'H', title: '작품명 입력 H-1', desc: 'H 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_H_p1.png', detailPrefix: 'pe_H_p1', imagesCount: 2 },
    { id: 'V_H_2', category: 'Visual', designer: 'H', title: '작품명 입력 H-2', desc: 'H 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_H_p2.png', detailPrefix: 'pe_H_p2', imagesCount: 2 },
    { id: 'V_I_1', category: 'Visual', designer: 'I', title: '작품명 입력 I-1', desc: 'I 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_I_p1.png', detailPrefix: 'pe_I_p1', imagesCount: 2 },
    { id: 'V_I_2', category: 'Visual', designer: 'I', title: '작품명 입력 I-2', desc: 'I 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_I_p2.png', detailPrefix: 'pe_I_p2', imagesCount: 2 },
    { id: 'V_J_1', category: 'Visual', designer: 'J', title: '작품명 입력 J-1', desc: 'J 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_J_p1.png', detailPrefix: 'pe_J_p1', imagesCount: 2 },
    { id: 'V_J_2', category: 'Visual', designer: 'J', title: '작품명 입력 J-2', desc: 'J 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_J_p2.png', detailPrefix: 'pe_J_p2', imagesCount: 2 },
    { id: 'V_K_1', category: 'Visual', designer: 'K', title: '작품명 입력 K-1', desc: 'K 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_K_p1.png', detailPrefix: 'pe_K_p1', imagesCount: 2 },
    { id: 'V_K_2', category: 'Visual', designer: 'K', title: '작품명 입력 K-2', desc: 'K 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_K_p2.png', detailPrefix: 'pe_K_p2', imagesCount: 2 },
    { id: 'V_L_1', category: 'Visual', designer: 'L', title: '작품명 입력 L-1', desc: 'L 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_L_p1.png', detailPrefix: 'pe_L_p1', imagesCount: 2 },
    { id: 'V_L_2', category: 'Visual', designer: 'L', title: '작품명 입력 L-2', desc: 'L 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_L_p2.png', detailPrefix: 'pe_L_p2', imagesCount: 2 },
    { id: 'V_M_1', category: 'Visual', designer: 'M', title: '작품명 입력 M-1', desc: 'M 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_M_p1.png', detailPrefix: 'pe_M_p1', imagesCount: 2 },
    { id: 'V_M_2', category: 'Visual', designer: 'M', title: '작품명 입력 M-2', desc: 'M 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_M_p2.png', detailPrefix: 'pe_M_p2', imagesCount: 2 },
    { id: 'V_N_1', category: 'Visual', designer: 'N', title: '작품명 입력 N-1', desc: 'N 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_N_p1.png', detailPrefix: 'pe_N_p1', imagesCount: 2 },
    { id: 'V_N_2', category: 'Visual', designer: 'N', title: '작품명 입력 N-2', desc: 'N 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_N_p2.png', detailPrefix: 'pe_N_p2', imagesCount: 2 },
    { id: 'V_O_1', category: 'Visual', designer: 'O', title: '작품명 입력 O-1', desc: 'O 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_O_p1.png', detailPrefix: 'pe_O_p1', imagesCount: 2 },
    { id: 'V_O_2', category: 'Visual', designer: 'O', title: '작품명 입력 O-2', desc: 'O 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_O_p2.png', detailPrefix: 'pe_O_p2', imagesCount: 2 },
    { id: 'V_P_1', category: 'Visual', designer: 'P', title: '작품명 입력 P-1', desc: 'P 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_P_p1.png', detailPrefix: 'pe_P_p1', imagesCount: 2 },
    { id: 'V_P_2', category: 'Visual', designer: 'P', title: '작품명 입력 P-2', desc: 'P 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_P_p2.png', detailPrefix: 'pe_P_p2', imagesCount: 2 },
    { id: 'V_Q_1', category: 'Visual', designer: 'Q', title: '작품명 입력 Q-1', desc: 'Q 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_Q_p1.png', detailPrefix: 'pe_Q_p1', imagesCount: 2 },
    { id: 'V_Q_2', category: 'Visual', designer: 'Q', title: '작품명 입력 Q-2', desc: 'Q 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_Q_p2.png', detailPrefix: 'pe_Q_p2', imagesCount: 2 },
    { id: 'V_R_1', category: 'Visual', designer: 'R', title: '작품명 입력 R-1', desc: 'R 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_R_p1.png', detailPrefix: 'pe_R_p1', imagesCount: 2 },
    { id: 'V_R_2', category: 'Visual', designer: 'R', title: '작품명 입력 R-2', desc: 'R 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_R_p2.png', detailPrefix: 'pe_R_p2', imagesCount: 2 },
    { id: 'V_S_1', category: 'Visual', designer: 'S', title: '작품명 입력 S-1', desc: 'S 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_S_p1.png', detailPrefix: 'pe_S_p1', imagesCount: 2 },
    { id: 'V_S_2', category: 'Visual', designer: 'S', title: '작품명 입력 S-2', desc: 'S 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_S_p2.png', detailPrefix: 'pe_S_p2', imagesCount: 2 },
    { id: 'V_T_1', category: 'Visual', designer: 'T', title: '작품명 입력 T-1', desc: 'T 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_T_p1.png', detailPrefix: 'pe_T_p1', imagesCount: 2 },
    { id: 'V_T_2', category: 'Visual', designer: 'T', title: '작품명 입력 T-2', desc: 'T 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_T_p2.png', detailPrefix: 'pe_T_p2', imagesCount: 2 },
    { id: 'V_U_1', category: 'Visual', designer: 'U', title: '작품명 입력 U-1', desc: 'U 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_U_p1.png', detailPrefix: 'pe_U_p1', imagesCount: 2 },
    { id: 'V_U_2', category: 'Visual', designer: 'U', title: '작품명 입력 U-2', desc: 'U 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_U_p2.png', detailPrefix: 'pe_U_p2', imagesCount: 2 },
    { id: 'V_V_1', category: 'Visual', designer: 'V', title: '작품명 입력 V-1', desc: 'V 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_V_p1.png', detailPrefix: 'pe_V_p1', imagesCount: 2 },
    { id: 'V_V_2', category: 'Visual', designer: 'V', title: '작품명 입력 V-2', desc: 'V 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_V_p2.png', detailPrefix: 'pe_V_p2', imagesCount: 2 },
    { id: 'V_W_1', category: 'Visual', designer: 'W', title: '작품명 입력 W-1', desc: 'W 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_W_p1.png', detailPrefix: 'pe_W_p1', imagesCount: 2 },
    { id: 'V_W_2', category: 'Visual', designer: 'W', title: '작품명 입력 W-2', desc: 'W 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_W_p2.png', detailPrefix: 'pe_W_p2', imagesCount: 2 },
    { id: 'V_X_1', category: 'Visual', designer: 'X', title: '작품명 입력 X-1', desc: 'X 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_X_p1.png', detailPrefix: 'pe_X_p1', imagesCount: 2 },
    { id: 'V_X_2', category: 'Visual', designer: 'X', title: '작품명 입력 X-2', desc: 'X 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_X_p2.png', detailPrefix: 'pe_X_p2', imagesCount: 2 },
    { id: 'V_Y_1', category: 'Visual', designer: 'Y', title: '작품명 입력 Y-1', desc: 'Y 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_Y_p1.png', detailPrefix: 'pe_Y_p1', imagesCount: 2 },
    { id: 'V_Y_2', category: 'Visual', designer: 'Y', title: '작품명 입력 Y-2', desc: 'Y 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_Y_p2.png', detailPrefix: 'pe_Y_p2', imagesCount: 2 },
    { id: 'V_Z_1', category: 'Visual', designer: 'Z', title: '작품명 입력 Z-1', desc: 'Z 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_Z_p1.png', detailPrefix: 'pe_Z_p1', imagesCount: 2 },
    { id: 'V_Z_2', category: 'Visual', designer: 'Z', title: '작품명 입력 Z-2', desc: 'Z 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_Z_p2.png', detailPrefix: 'pe_Z_p2', imagesCount: 2 },
    { id: 'V_AA_1', category: 'Visual', designer: 'AA', title: '작품명 입력 AA-1', desc: 'AA 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AA_p1.png', detailPrefix: 'pe_AA_p1', imagesCount: 2 },
    { id: 'V_AA_2', category: 'Visual', designer: 'AA', title: '작품명 입력 AA-2', desc: 'AA 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AA_p2.png', detailPrefix: 'pe_AA_p2', imagesCount: 2 },
    { id: 'V_AB_1', category: 'Visual', designer: 'AB', title: '작품명 입력 AB-1', desc: 'AB 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AB_p1.png', detailPrefix: 'pe_AB_p1', imagesCount: 2 },
    { id: 'V_AB_2', category: 'Visual', designer: 'AB', title: '작품명 입력 AB-2', desc: 'AB 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AB_p2.png', detailPrefix: 'pe_AB_p2', imagesCount: 2 },
    { id: 'V_AC_1', category: 'Visual', designer: 'AC', title: '작품명 입력 AC-1', desc: 'AC 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AC_p1.png', detailPrefix: 'pe_AC_p1', imagesCount: 2 },
    { id: 'V_AC_2', category: 'Visual', designer: 'AC', title: '작품명 입력 AC-2', desc: 'AC 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AC_p2.png', detailPrefix: 'pe_AC_p2', imagesCount: 2 },
    { id: 'V_AD_1', category: 'Visual', designer: 'AD', title: '작품명 입력 AD-1', desc: 'AD 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AD_p1.png', detailPrefix: 'pe_AD_p1', imagesCount: 2 },
    { id: 'V_AD_2', category: 'Visual', designer: 'AD', title: '작품명 입력 AD-2', desc: 'AD 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AD_p2.png', detailPrefix: 'pe_AD_p2', imagesCount: 2 },
    { id: 'V_AE_1', category: 'Visual', designer: 'AE', title: '작품명 입력 AE-1', desc: 'AE 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AE_p1.png', detailPrefix: 'pe_AE_p1', imagesCount: 2 },
    { id: 'V_AE_2', category: 'Visual', designer: 'AE', title: '작품명 입력 AE-2', desc: 'AE 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AE_p2.png', detailPrefix: 'pe_AE_p2', imagesCount: 2 },
    { id: 'V_AF_1', category: 'Visual', designer: 'AF', title: '작품명 입력 AF-1', desc: 'AF 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AF_p1.png', detailPrefix: 'pe_AF_p1', imagesCount: 2 },
    { id: 'V_AF_2', category: 'Visual', designer: 'AF', title: '작품명 입력 AF-2', desc: 'AF 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AF_p2.png', detailPrefix: 'pe_AF_p2', imagesCount: 2 },
    { id: 'V_AG_1', category: 'Visual', designer: 'AG', title: '작품명 입력 AG-1', desc: 'AG 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AG_p1.png', detailPrefix: 'pe_AG_p1', imagesCount: 2 },
    { id: 'V_AG_2', category: 'Visual', designer: 'AG', title: '작품명 입력 AG-2', desc: 'AG 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AG_p2.png', detailPrefix: 'pe_AG_p2', imagesCount: 2 },
    { id: 'V_AH_1', category: 'Visual', designer: 'AH', title: '작품명 입력 AH-1', desc: 'AH 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AH_p1.png', detailPrefix: 'pe_AH_p1', imagesCount: 2 },
    { id: 'V_AH_2', category: 'Visual', designer: 'AH', title: '작품명 입력 AH-2', desc: 'AH 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AH_p2.png', detailPrefix: 'pe_AH_p2', imagesCount: 2 },
    { id: 'V_AI_1', category: 'Visual', designer: 'AI', title: '작품명 입력 AI-1', desc: 'AI 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AI_p1.png', detailPrefix: 'pe_AI_p1', imagesCount: 2 },
    { id: 'V_AI_2', category: 'Visual', designer: 'AI', title: '작품명 입력 AI-2', desc: 'AI 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AI_p2.png', detailPrefix: 'pe_AI_p2', imagesCount: 2 },
    { id: 'V_AJ_1', category: 'Visual', designer: 'AJ', title: '작품명 입력 AJ-1', desc: 'AJ 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AJ_p1.png', detailPrefix: 'pe_AJ_p1', imagesCount: 2 },
    { id: 'V_AJ_2', category: 'Visual', designer: 'AJ', title: '작품명 입력 AJ-2', desc: 'AJ 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AJ_p2.png', detailPrefix: 'pe_AJ_p2', imagesCount: 2 },
    { id: 'V_AK_1', category: 'Visual', designer: 'AK', title: '작품명 입력 AK-1', desc: 'AK 학생의 첫 번째 작품 설명입니다.', thumbFile: 'pc_AK_p1.png', detailPrefix: 'pe_AK_p1', imagesCount: 2 },
    { id: 'V_AK_2', category: 'Visual', designer: 'AK', title: '작품명 입력 AK-2', desc: 'AK 학생의 두 번째 작품 설명입니다.', thumbFile: 'pc_AK_p2.png', detailPrefix: 'pe_AK_p2', imagesCount: 2 },

    // Space (A ~ R) - 18명 x 1작품 = 18개
    { id: 'S_A', category: 'Space', designer: 'A', title: '작품명 입력 Space-A', desc: 'A 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_A.png', detailPrefix: 'pe_A', imagesCount: 2 },
    { id: 'S_B', category: 'Space', designer: 'B', title: '작품명 입력 Space-B', desc: 'B 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_B.png', detailPrefix: 'pe_B', imagesCount: 2 },
    { id: 'S_C', category: 'Space', designer: 'C', title: '작품명 입력 Space-C', desc: 'C 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_C.png', detailPrefix: 'pe_C', imagesCount: 2 },
    { id: 'S_D', category: 'Space', designer: 'D', title: '작품명 입력 Space-D', desc: 'D 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_D.png', detailPrefix: 'pe_D', imagesCount: 2 },
    { id: 'S_E', category: 'Space', designer: 'E', title: '작품명 입력 Space-E', desc: 'E 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_E.png', detailPrefix: 'pe_E', imagesCount: 2 },
    { id: 'S_F', category: 'Space', designer: 'F', title: '작품명 입력 Space-F', desc: 'F 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_F.png', detailPrefix: 'pe_F', imagesCount: 2 },
    { id: 'S_G', category: 'Space', designer: 'G', title: '작품명 입력 Space-G', desc: 'G 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_G.png', detailPrefix: 'pe_G', imagesCount: 2 },
    { id: 'S_H', category: 'Space', designer: 'H', title: '작품명 입력 Space-H', desc: 'H 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_H.png', detailPrefix: 'pe_H', imagesCount: 2 },
    { id: 'S_I', category: 'Space', designer: 'I', title: '작품명 입력 Space-I', desc: 'I 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_I.png', detailPrefix: 'pe_I', imagesCount: 2 },
    { id: 'S_J', category: 'Space', designer: 'J', title: '작품명 입력 Space-J', desc: 'J 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_J.png', detailPrefix: 'pe_J', imagesCount: 2 },
    { id: 'S_K', category: 'Space', designer: 'K', title: '작품명 입력 Space-K', desc: 'K 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_K.png', detailPrefix: 'pe_K', imagesCount: 2 },
    { id: 'S_L', category: 'Space', designer: 'L', title: '작품명 입력 Space-L', desc: 'L 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_L.png', detailPrefix: 'pe_L', imagesCount: 2 },
    { id: 'S_M', category: 'Space', designer: 'M', title: '작품명 입력 Space-M', desc: 'M 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_M.png', detailPrefix: 'pe_M', imagesCount: 2 },
    { id: 'S_N', category: 'Space', designer: 'N', title: '작품명 입력 Space-N', desc: 'N 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_N.png', detailPrefix: 'pe_N', imagesCount: 2 },
    { id: 'S_O', category: 'Space', designer: 'O', title: '작품명 입력 Space-O', desc: 'O 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_O.png', detailPrefix: 'pe_O', imagesCount: 2 },
    { id: 'S_P', category: 'Space', designer: 'P', title: '작품명 입력 Space-P', desc: 'P 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_P.png', detailPrefix: 'pe_P', imagesCount: 2 },
    { id: 'S_Q', category: 'Space', designer: 'Q', title: '작품명 입력 Space-Q', desc: 'Q 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_Q.png', detailPrefix: 'pe_Q', imagesCount: 2 },
    { id: 'S_R', category: 'Space', designer: 'R', title: '작품명 입력 Space-R', desc: 'R 학생의 공간 디자인 작품 설명입니다.', thumbFile: 'pc_R.png', detailPrefix: 'pe_R', imagesCount: 2 }
];

const archiveDataset = [
    { year: 2025, format: 'png', link: 'http://gsdd.org/2025/index.html', title: 'CUT! LAYER! PASTE!', desc: '2025년도 전시 설명 내용...' },
    { year: 2024, format: 'webp', link: 'http://gsdd.org/2024/index.html', title: 'Get A Clue', desc: '대학에서의 4년간, 우리는 수많은 도전과 학습을 통해 많은 것을 배웠습니다. 이 과정에서 얻은 경험과 노력이 우리 미래에 대한 중요한 단서를 제공해 주었습니다. “GET A CLUE”는 이러한 경험을 바탕으로, 미래를 향한 방향성을 탐색하는 여정을 선보입니다.' },
    { year: 2023, format: 'png', link: 'http://gsdd.org/2023/index.html', title: 'PROJECT: FUTUREFORMING', desc: '퓨처포밍 프로젝트는 학생들이 각자 광활한 우주로 나아가 별을 찾고, 미래에 정착할 수 있도록 포밍(forming) 시키는 프로젝트다. 졸업 전시를 통해 각자의 미래를 준비하고 모습을 만들어 가는 것을 원석을 깎아 별 조각으로 만드는 것으로 비유하였으며, 별 조각이 된 학생들의 작업물이 하나로 합쳐져 완전한 별 형태를 이룬다. 이는 우리의 미래 가능성을 보여주는 코어로 재현된다. 프로젝트의 성공은 전시장에 포밍 완료된 별 조각 샘플을 채취하여 전시하는 것으로 증명한다.' },
    { year: 2022, format: 'jpeg', link: 'http://gsdd.org/2022/', title: 'NEXT LEVEL', desc: '대학교 4학년의 마지막을 장식하는 졸업전시회는 곧 우리가 사회에 한 걸음 내딛게 된다는 사실을 알려줍니다. 우리는 졸업이라는 과정을 거쳐 학생에서 사회인으로 발전하게 되고, 이렇게 사회 생활이라는 새로운 단계로 넘어가게 됩니다. 학생들은 개개인만의 개성과 능력으로 작품을 만들고, 주어진 다음 단계를 스스로 풀어나간다는 의미를 담았습니다.' },
    { year: 2021, format: 'png', link: 'http://gsdd.org/2021/', title: '2021', desc: '우리는 일상 속에서 디자인을 공부할 때 혹은 공책을 펴볼 때도 쉽게 행과 열을 찾아볼 수 있다. 각기 다른 행과 열이 뻗어 나가면 그 방향성이 모여 하나의 구조를 만들어내고 그 구조 안에는 다양한 가능성이 존재한다. 이는 우리와 닮아있다. 각자의 방식, 각자의 과정과 방법론이 모여 졸업전시회라는 구조를 만들어낸다.' },
    { year: 2020, format: 'webp', link: 'http://gsdd.org/2020/', title: '2020', desc: '지난 1월 유행하기 시작한 전염병 코로나로 인해 학교 출입 시, 마스크에 체온 확인 완료를 표시하기 위해 스티커를 붙여야만 했다. 둥근 모양의 형광 스티커는 매일 다른 색으로 교체되었고 버려지거나 핸드폰, 노트북, 방 거울 등에 쌓여갔다. 형형색색의 스티커는 곧 코로나로 인해 바뀌어버린 우리의 생활을 뜻하기도 하지만 둥글둥글 귀여운 모양으로 핸드폰 뒷면에 남아있기도 했다. 우리는 둥근 스티커로 졸업생 한 명 한 명의 개성을 표현하고자 했다.' },
    { year: 2019, format: 'webp', link: 'http://gsdd.org/2019/', title: '2019', desc: '제 1회 동양대학교 디자인학부 졸업전시회' }
];

/* -----------------------------------------------------------
   Works 렌더링 로직
----------------------------------------------------------- */
function renderWorksGrid(data) {
    const grid = document.getElementById('works-list-grid');
    grid.innerHTML = '';
    
    data.forEach(work => {
        const workItem = document.createElement('li'); 
        workItem.className = 'works-item';
        workItem.onclick = () => showWorkDetail(work.id);
        
        workItem.innerHTML = `
            <figure class="works-thumb">
                4 Columns<br>384px x 384px<br>(${work.thumbFile})
            </figure>
            <article class="works-meta">
                <h3 class="works-title">${work.title}</h3>
                <p class="works-author">${work.designer} / ${work.category}</p>
            </article>
        `;
        grid.appendChild(workItem);
    });
}

function filterWorksByCategory(category) {
    document.querySelectorAll('.works-filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${category.toLowerCase()}`).classList.add('active');
    
    const filteredData = category === 'All' ? worksDataset : worksDataset.filter(w => w.category === category);
    renderWorksGrid(filteredData);
}

function showWorkDetail(workId) {
    const work = worksDataset.find(w => w.id === workId);
    if (!work) return;

    navigateToPage('detail');
    document.getElementById('detail-project-title').innerText = work.title;
    document.getElementById('detail-author-name').innerText = work.designer;
    document.getElementById('detail-description-text').innerText = work.desc;
    
    const imagesList = document.getElementById('detail-images-list');
    imagesList.innerHTML = ''; 

    for (let i = 1; i <= work.imagesCount; i++) {
        const imgBox = document.createElement('figure');
        imgBox.className = 'detail-img-placeholder';
        imgBox.innerHTML = `6 Columns<br>Width: 588px<br>(${work.detailPrefix}_${i}.png)`;
        imagesList.appendChild(imgBox);
    }
}

/* -----------------------------------------------------------
   Archive 렌더링 로직
----------------------------------------------------------- */
let archiveIndex = 0;

function initArchivePagination() {
    const dropdown = document.getElementById('archive-dropdown-list');
    const dotsContainer = document.getElementById('archive-dots-container');
    
    archiveDataset.forEach((data, index) => {
        const liYear = document.createElement('li');
        liYear.className = 'archive-dropdown-item';
        liYear.innerText = data.year;
        liYear.onclick = (e) => { 
            e.stopPropagation(); 
            navigateToPage('archive'); 
            archiveIndex = index;      
            updateArchiveView();       
        };
        dropdown.appendChild(liYear);

        const dot = document.createElement('div');
        dot.className = index === 0 ? 'archive-dot active' : 'archive-dot';
        dot.onclick = () => { archiveIndex = index; updateArchiveView(); };
        dotsContainer.appendChild(dot);
    });
}

function moveArchiveSlide(direction) {
    archiveIndex += direction; 
    if (archiveIndex < 0) archiveIndex = archiveDataset.length - 1;
    if (archiveIndex >= archiveDataset.length) archiveIndex = 0;
    updateArchiveView();
}

function updateArchiveView() {
    const data = archiveDataset[archiveIndex];
    
    document.getElementById('archive-display-year').innerText = data.year;
    document.getElementById('archive-title-text').innerText = data.title;
    document.getElementById('archive-description-text').innerText = data.desc;
    
    const posterContainer = document.getElementById('archive-poster-container');
    
    posterContainer.innerHTML = `<img src="${data.year}gsdd.${data.format}" alt="${data.year} GSDD Poster">`;

    const dots = document.querySelectorAll('.archive-dot');
    dots.forEach((dot, idx) => {
        if (idx === archiveIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function openArchiveExternalLink() {
    const url = archiveDataset[archiveIndex].link;
    window.open(url, '_blank');
}

/* -----------------------------------------------------------
   페이지 네비게이션 로직
----------------------------------------------------------- */
function navigateToPage(pageName) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const targetId = `section-${pageName}`;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const targetNavId = `link-${pageName}`;
    const targetNavLink = document.getElementById(targetNavId);
    if (targetNavLink) {
        targetNavLink.classList.add('active');
    }

    if (pageName === 'detail' || pageName === 'works') {
        document.getElementById('link-works').classList.add('active');
    }

    window.scrollTo(0, 0);
}
/* 기존 데이터 배열과 렌더링 함수들은 이 위에 그대로 두기 */

// ... (기존 worksDataset, archiveDataset, renderWorksGrid, 등등 그대로 유지) ...

/* -----------------------------------------------------------
   모바일 햄버거 메뉴 제어 로직 (X 버튼 변환 추가)
----------------------------------------------------------- */
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    navMenu.classList.toggle('active');

    // 메뉴가 열려있으면 X로, 닫히면 다시 햄버거로 변경
    if (navMenu.classList.contains('active')) {
        hamburgerBtn.innerText = '✕';
        document.body.style.overflow = 'hidden'; // 메뉴 열렸을 때 배경 스크롤 방지
    } else {
        hamburgerBtn.innerText = '☰';
        document.body.style.overflow = 'auto'; // 스크롤 복구
    const archiveDropdown = document.getElementById('archive-dropdown-list');
        const linkArchive = document.getElementById('link-archive');
        if (archiveDropdown) archiveDropdown.classList.remove('open');
        if (linkArchive) linkArchive.classList.remove('open');
    }
}

/* -----------------------------------------------------------
   페이지 네비게이션 로직 (메뉴 닫기 기능 강화)
----------------------------------------------------------- */
function navigateToPage(pageName) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const targetId = `section-${pageName}`;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const targetNavId = `link-${pageName}`;
    const targetNavLink = document.getElementById(targetNavId);
    if (targetNavLink) {
        targetNavLink.classList.add('active');
    }

    if (pageName === 'detail' || pageName === 'works') {
        document.getElementById('link-works').classList.add('active');
    }
if (pageName === 'archive') {
        archiveIndex = 0;
        updateArchiveView();
    }
    // 모바일에서 링크를 클릭하면 열려있던 메뉴 닫고 버튼도 ☰로 복구
    const navMenu = document.getElementById('nav-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburgerBtn.innerText = '☰';
        document.body.style.overflow = 'auto';
    }

    window.scrollTo(0, 0);
}


function handleArchiveClick(event) {
    if (window.innerWidth <= 768) {
        // 모바일 화면일 땐 페이지 이동을 멈추고 메뉴만 스르륵 엽니다!
        event.preventDefault(); 
        const dropdown = document.getElementById('archive-dropdown-list');
        const linkArchive = document.getElementById('link-archive');
        
        dropdown.classList.toggle('open');
        linkArchive.classList.toggle('open');
    } else {
        // 데스크탑일 땐 평소처럼 아카이브 메인(2025년)으로 이동하죠!
        navigateToPage('archive');
    }
}
/* -----------------------------------------------------------
   초기화 (Init)
----------------------------------------------------------- */
renderWorksGrid(worksDataset);
initArchivePagination();
updateArchiveView();